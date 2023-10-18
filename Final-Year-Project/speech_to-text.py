import speech_recognition as sr
import pyttsx3

#initializing recognizer
r = sr.Recognizer()  
#it is an object which is used to interact with the microphone

def record_text():
    while(1):
        try:
            #use the microphone for the input.
            with sr.Microphone as source2:
                # prepare recognizer to recieve input
                r.adjust_for_ambient_noise(source2, duration=0.2)

                #listen for the user input
                audio2 = r.listen(source2)

                # using google to recognize audio 
                myText = r.recognize_google(audio2)

                return myText

        except sr.RequestError as e:
            print("Could not request results; {0}".format(e))

        except sr.UnknownValueError:
            print("Unknown Error")

    return

def output_text(text):
    f = open("output.txt",'a')
    f.write(text)
    f.write("\n")
    f.close()
    return

while(1):
    text = record_text()
    output_text(text)

    print("wrote text")

