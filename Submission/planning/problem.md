# Chatbot

## Problem statement

What should I do on my day off?

## Inputs, processes and outputs

Flowchart:
https://excalidraw.com/#room=8222a54c402b78200e79rxxMwYCp2OJtI0-gYVZJdw

## 1

Start: Hello, I am Day Decision Bot. I'm here to help you decide what to do on your day off. What is your name?
Input: <username>
Output: <username> do you have any chores you have to do today?
Input: Yes
Output: <username> will your chores take all day?
Input: Yes
Output: You should probably do them or you'll end up spending the entire day staring at them.

## 2

Input: “<username>”
Output: “<username> do you have any chores you have to do today?”
Input: “Yes”
Output: “<username> will your chores take all day?”
Input: “No”
Output: “<username> will you have any energy to see anyone after you do your chores today?”
Input: “Yes”
Output: “Grab a coffee, or go shopping with a friend. If the evening suits you better you could always go bowling, or see a movie instead.”

## 3

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “Yes”

Output: “<username> will your chores take all day?”

Input: “No”

Output: “<username> will you have any energy to see anyone after you do your chores today?”

Input: “No”

Output: “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.”

## 4

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “No”

Output: “<username> are you wanting to spend the day outside?”

Input: “No”

Output: “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself. ”

## 5

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “No”

Output: “<username> are you wanting to spend the day outside?”

Input: “Yes”

Output: “Go for a walk at a forest reserve, meet up with a friend and have a picnic at a local park, or take a sunset stroll on a beach.”

## 6

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “Yes”

Output: “Take a hike with friends, hit the beach for a swim, or get those gains at the gym if you'd rather spend the day working on yourself.”

## Test scenarios

<b>Scenario 1</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “Yes”

Output: “<username> will your chores take all day?”

Input: “Yes”

Output: “You should probably do them or you'll end up spending the entire day staring at them.”

1. Reply with your name, and ask first question
2. Let user reply with "Yes" and respond with “<username> will your chores take all day?”
3. Let user reply with "Yes" and respond with “You should probably do them or you'll end up spending the entire day staring at them.”

<b>Scenario 2</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “Yes”

Output: “<username> will your chores take all day?”

Input: “No”

Output: “<username> will you have any energy to see anyone after you do your chores today?”

Input: “Yes”

Output: “Grab a coffee, or go shopping with a friend. If the evening suits you better you could always go bowling, or see a movie instead.”

1. Reply with your name, and ask first question
2. Let user reply with "Yes" and respond with “<username> will your chores take all day?”
3. Let user reply with "No" and respond with “<username> will you have any energy to see anyone after you do your chores today?”
4. Let user reply with "Yes" and respond with “Grab a coffee, or go shopping with a friend. If the evening suits you better you could always go bowling, or see a movie instead.”

<b>Scenario 3</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “Yes”

Output: “<username> will your chores take all day?”

Input: “No”

Output: “<username> will you have any energy to see anyone after you do your chores today?”

Input: “No”

Output: “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.”

1. Reply with your name, and ask first question
2. Let user reply with "Yes" and respond with “<username> will your chores take all day?”
3. Let user reply with "No" and respond with “<username> will you have any energy to see anyone after you do your chores today?”
4. Let user reply with "No" and respond with “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.”

<b>Scenario 4</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “No”

Output: “<username> are you wanting to spend the day outside?”

Input: “No”

Output: “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself. ”

1. Reply with your name, and ask first question
2. Let user reply with "No" and respond with “<username> will your chores take all day?”
3. Let user reply with "No" and respond with <username> are you wanting to spend the day outside?”
4. Let user reply with "No" and respond with “Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.”

<b>Scenario 5</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “No”

Output: “<username> are you wanting to spend the day outside?”

Input: “Yes”

Output: “Go for a walk at a forest reserve, meet up with a friend and have a picnic at a local park, or take a sunset stroll on a beach.”

1. Reply with your name, and ask first question
2. Let user reply with "No" and respond with “<username> will your chores take all day?”
3. Let user reply with "No" and respond with <username> are you wanting to spend the day outside?”
4. Let user reply with "Yes" and respond with “Go for a walk at a forest reserve, meet up with a friend and have a picnic at a local park, or take a sunset stroll on a beach.”

<b>Scenario 6</b>

Input: “<username>”

Output: “<username> do you have any chores you have to do today?”

Input: “No”

Output: “<username> do you want to exercise today?”

Input: “Yes”

Output: “Take a hike with friends, hit the beach for a swim, or get those gains at the gym if you'd rather spend the day working on yourself.”

1. Reply with your name, and ask first question
2. Let user reply with "No" and respond with “<username> do you want to exercise today?”
3. Let user reply with "Yes" and respond with “Take a hike with friends, hit the beach for a swim, or get those gains at the gym if you'd rather spend the day working on yourself.”
