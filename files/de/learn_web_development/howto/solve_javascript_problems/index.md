---
title: Häufige JavaScript-Probleme lösen
short-title: Häufige JavaScript-Probleme
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Die folgenden Links führen zu Lösungen für häufig auftretende Probleme, die beim Schreiben von JavaScript auftreten können.

## Häufige Anfängerfehler

### Korrekte Rechtschreibung und Groß-/Kleinschreibung

Falls Ihr Code nicht funktioniert und/oder der Browser sich beschwert, dass etwas undefiniert ist, überprüfen Sie, ob Sie alle Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufige eingebaute Browserfunktionen, die Probleme verursachen, sind:

| Richtig                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position von Semikolons

Achten Sie darauf, dass Sie keine Semikolons falsch setzen. Zum Beispiel:

| Richtig                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt mehrere Dinge, die bei Funktionen schiefgehen können.

Ein häufiger Fehler ist es, die Funktion zu deklarieren, sie aber nirgendwo aufzurufen. Zum Beispiel:

```js
function myFunction() {
  alert("This is my function.");
}
```

Dieser Code macht nichts, es sei denn, Sie rufen ihn mit der folgenden Anweisung auf:

```js
myFunction();
```

#### Funktionsumfang

Denken Sie daran, dass [Funktionen ihren eigenen Gültigkeitsbereich haben](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) — Sie können nicht auf einen Variablenwert zugreifen, der innerhalb einer Funktion gesetzt wurde, es sei denn, Sie haben die Variable global deklariert (d.h. nicht innerhalb einer Funktion) oder [den Wert zurückgeben](/de/docs/Learn_web_development/Core/Scripting/Return_values) von der Funktion.

#### Code-Ausführung nach einer return-Anweisung

Denken Sie auch daran, dass der JavaScript-Interpreter die Funktion verlässt, wenn Sie von einer Funktion zurückkehren — kein Code nach der return-Anweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) eine Fehlermeldung in der Entwicklerkonsole aus, wenn Sie Code nach einer return-Anweisung haben. Firefox gibt "unerreichbarer Code nach return-Anweisung" aus.

### Objektnotation versus normale Zuweisung

Wenn Sie etwas normal in JavaScript zuweisen, verwenden Sie ein einzelnes Gleichheitszeichen, z.B.:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) müssen Sie jedoch darauf achten, die korrekte Syntax zu verwenden. Das Objekt muss in geschweifte Klammern gesetzt werden, Mitgliedsnamen müssen mit Doppelpunkten von ihren Werten getrennt werden, und Mitglieder müssen durch Kommas getrennt werden. Zum Beispiel:

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## Grundlegende Begriffsbestimmungen

- [Was ist JavaScript?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#a_high-level_definition)
- [Was ist eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#what_is_a_variable)
- [Was sind Strings?](/de/docs/Learn_web_development/Core/Scripting/Strings)
- [Was ist ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array)
- [Was ist eine Schleife?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Was ist eine Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions)
- [Was ist ein Ereignis?](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Was ist ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist JSON?](/de/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json)
- [Was ist eine Web-API?](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#what_are_apis)
- [Was ist das DOM?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)

## Grundlegende Anwendungsfälle

### Allgemein

- [Wie fügen Sie JavaScript zu Ihrer Seite hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [Wie fügen Sie Kommentare in JavaScript-Code ein?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#comments)

### Variablen

- [Wie deklarieren Sie eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#declaring_a_variable)
- [Wie initialisieren Sie eine Variable mit einem Wert?](/de/docs/Learn_web_development/Core/Scripting/Variables#initializing_a_variable)
- [Wie aktualisieren Sie den Wert einer Variablen?](/de/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable) (siehe auch [Zuweisungsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators))
- [Welche Datentypen können Werte in JavaScript haben?](/de/docs/Learn_web_development/Core/Scripting/Variables#variable_types)
- [Was bedeutet 'schwach typisiert'?](/de/docs/Learn_web_development/Core/Scripting/Variables#dynamic_typing)

### Mathematik

- [Mit welchen Arten von Zahlen müssen Sie sich in der Webentwicklung beschäftigen?](/de/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [Wie führen Sie grundlegende mathematische Operationen in JavaScript durch?](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [Was ist Operatorenpriorität, und wie wird sie in JavaScript behandelt?](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [Wie erhöhen und verringern Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [Wie vergleichen Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (z.B. um zu sehen, welcher größer ist oder ob ein Wert einem anderen gleicht).

### Strings

- [Wie erstellen Sie einen String in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Strings#creating_a_string)
- [Müssen Sie einfache oder doppelte Anführungszeichen verwenden?](/de/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_vs._double_quotes)
- [Wie maskieren Sie Zeichen in Strings?](/de/docs/Learn_web_development/Core/Scripting/Strings#escaping_characters_in_a_string)
- [Wie verbinden Sie Strings miteinander?](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenating_strings)
- [Können Sie Strings und Zahlen miteinander verbinden?](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings)
- [Wie finden Sie die Länge eines Strings heraus?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [Wie finden Sie heraus, welches Zeichen an einer bestimmten Position in einem String ist?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie finden und extrahieren Sie einen bestimmten Teilstring aus einem String?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändern Sie die Groß- und Kleinschreibung eines Strings?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [Wie ersetzen Sie einen bestimmten Teilstring durch einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellen Sie ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#creating_arrays)
- [Wie greifen Sie auf die Elemente eines Arrays zu und ändern diese?](/de/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (dazu gehören auch mehrdimensionale Arrays)
- [Wie finden Sie die Länge eines Arrays heraus?](/de/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [Wie fügen Sie Elemente zu einem Array hinzu?](/de/docs/Learn_web_development/Core/Scripting/Arrays#adding_items)
- [Wie entfernen Sie Elemente aus einem Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#removing_items)
- [Wie teilen Sie einen String in Array-Elemente auf oder verbinden Array-Elemente zu einem String?](/de/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### JavaScript-Debugging

- [Was sind die grundlegenden Fehlertypen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [Was sind Browser-Entwicklertools und wie greifen Sie darauf zu?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [Wie protokollieren Sie einen Wert in die JavaScript-Konsole?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [Wie verwenden Sie Breakpoints und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

Für weitere Informationen zum Debugging von JavaScript siehe [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript). Siehe auch [Andere häufige Fehler](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) für eine Beschreibung häufiger Fehler.

### Entscheidungen im Code treffen

- [Wie führen Sie verschiedene Code-Blöcke aus, abhängig vom Wert einer Variablen oder einer anderen Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Wie verwenden Sie if...else-Anweisungen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements)
- [Wie verschachteln Sie einen Entscheidungsblock in einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if...else)
- [Wie verwenden Sie UND-, ODER- und NICHT-Operatoren in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [Wie gehen Sie bequem mit einer großen Anzahl von Auswahlmöglichkeiten für eine Bedingung um?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [Wie verwenden Sie einen ternären Operator, um schnell zwischen zwei Optionen auf Basis eines Wahrheits- oder Falschtests zu wählen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führen Sie denselben Codeabschnitt immer wieder aus?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Wie verlassen Sie eine Schleife vorzeitig, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [Wie überspringen Sie zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [Wie verwenden Sie while- und do...while-Schleifen?](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)

## Fortgeschrittene Anwendungsfälle

### Funktionen

- [Wie finden Sie Funktionen im Browser?](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [Wie erstellen Sie Ihre eigenen Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [Wie führen Sie (rufen, oder starten) eine Funktion aus?](/de/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions)
- [Wie geben Sie Parameter (oder Argumente) beim Aufrufen einer Funktion an?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_parameters)
- [Was ist Funktionsumfang?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte, und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Return_values)

### Objekte

- [Wie erstellen Sie ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [Wie greifen Sie auf die Methoden und Eigenschaften eines Objekts zu und setzen diese?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [Was ist `this`, im Kontext eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object-oriented_programming_from_10000_meters)
- [Was sind Konstruktoren und Instanzen, und wie erstellen Sie sie?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [Welche unterschiedlichen Möglichkeiten gibt es, um Objekte in JavaScript zu erstellen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [Wie strukturieren Sie JSON-Daten und lesen sie von JavaScript aus?](/de/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [Wie können Sie eine JSON-Datei in eine Seite laden?](/de/docs/Learn_web_development/Core/Scripting/JSON#loading_our_json)
- [Wie konvertieren Sie ein JSON-Objekt in einen Textstring und umgekehrt?](/de/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Ereignisse

- [Was sind Ereignishandler und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [Was sind Inline-Ereignishandler?](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_don%27t_use_these)
- [Was macht die `addEventListener()`-Funktion und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [Welches Mechanismus sollte ich verwenden, um Ereigniscode zu meinen Webseiten hinzuzufügen?](/de/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_i_use)
- [Was sind Ereignisobjekte und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [Wie verhindern Sie das Standardverhalten von Ereignissen?](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior)
- [Wie feuern Ereignisse auf verschachtelten Elementen? (Ereignisweitergabe, auch verwandt — Ereignis-Bubbling und -Capturing)](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Was ist Ereignisdelegation und wie funktioniert sie?](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Was ist die constructor-Eigenschaft und wie können Sie sie nutzen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_constructor_property)
- [Wie fügen Sie Methoden zum Konstruktor hinzu?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#modifying_prototypes)
- [Wie erstellen Sie einen neuen Konstruktor, der seine Mitglieder von einem Elter-Konstruktor erbt?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [Wann sollten Sie Vererbung in JavaScript verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object_member_summary)

### Web-APIs

- [Wie manipulieren Sie das DOM (z.B. Elemente hinzufügen oder entfernen) mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation)
