---
title: Lösen Sie häufige JavaScript-Probleme
short-title: Häufige JavaScript-Probleme
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: da9123f0820286a9a87c8ca33447e7c5e5a20320
---

{{LearnSidebar}}

Die folgenden Links verweisen auf Lösungen für allgemeine Probleme, denen Sie beim Schreiben von JavaScript begegnen können.

## Häufige Anfängerfehler

### Korrekte Schreibweise und Groß-/Kleinschreibung

Wenn Ihr Code nicht funktioniert und/oder der Browser meldet, dass etwas undefiniert ist, überprüfen Sie, ob Sie alle Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufig eingebettete Browserfunktionen, die Probleme verursachen, sind:

| Korrekt                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position des Semikolons

Sie müssen sicherstellen, dass Sie keine Semikolons falsch platzieren. Zum Beispiel:

| Korrekt                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt mehrere Dinge, die bei Funktionen schiefgehen können.

Einer der häufigsten Fehler ist, die Funktion zu deklarieren, sie aber nirgends aufzurufen. Zum Beispiel:

```js
function myFunction() {
  alert("This is my function.");
}
```

Dieser Code wird nichts tun, es sei denn, Sie rufen ihn mit der folgenden Anweisung auf:

```js
myFunction();
```

#### Funktionsumfang

Denken Sie daran, dass [Funktionen ihren eigenen Gültigkeitsbereich haben](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) – Sie können von außerhalb der Funktion nicht auf einen innerhalb der Funktion gesetzten Variablenwert zugreifen, es sei denn, Sie haben die Variable global deklariert (d.h. nicht innerhalb einer Funktion) oder Sie [geben den Wert aus der Funktion zurück](/de/docs/Learn_web_development/Core/Scripting/Return_values).

#### Code-Ausführung nach einer Rückgabeanweisung

Denken Sie auch daran, dass wenn Sie aus einer Funktion zurückkehren, der JavaScript-Interpreter die Funktion verlässt – kein Code nach der Rückgabeanweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) eine Fehlermeldung in der Entwicklerkonsole aus, wenn Sie Code nach einer Rückgabeanweisung haben. Firefox gibt "unerreichbarer Code nach Rückgabeanweisung" aus.

### Objektnotation versus normale Zuweisung

Wenn Sie eine normale Zuweisung in JavaScript vornehmen, verwenden Sie ein einfaches Gleichheitszeichen, z.B.:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) müssen Sie jedoch darauf achten, die korrekte Syntax zu verwenden. Das Objekt muss von geschweiften Klammern umgeben sein, die Mitgliedsnamen müssen von ihren Werten mit Doppelpunkten getrennt werden und die Mitglieder müssen durch Kommas getrennt sein. Zum Beispiel:

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## Grundlegende Definitionen

- [Was ist JavaScript?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#a_high-level_definition)
- [Was ist eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#what_is_a_variable)
- [Was sind Strings?](/de/docs/Learn_web_development/Core/Scripting/Strings)
- [Was ist ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array)
- [Was ist eine Schleife?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Was ist eine Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions)
- [Was ist ein Ereignis?](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Was ist ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist JSON?](/de/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json)
- [Was ist ein Web-API?](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#what_are_apis)
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

- [Mit welchen Zahlentypen müssen Sie sich in der Webentwicklung beschäftigen?](/de/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [Wie machen Sie grundlegende Mathematik in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [Was ist Operator-Vorrang, und wie wird er in JavaScript behandelt?](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [Wie erhöhen und verringern Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [Wie vergleichen Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (z.B., um zu sehen, welches größer ist, oder um zu überprüfen, ob ein Wert gleich einem anderen ist).

### Strings

- [Wie erstellen Sie einen String in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Strings#creating_a_string)
- [Müssen Sie einfache oder doppelte Anführungszeichen verwenden?](/de/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_vs._double_quotes)
- [Wie entkommen Sie Zeichen in Strings?](/de/docs/Learn_web_development/Core/Scripting/Strings#escaping_characters_in_a_string)
- [Wie verbinden Sie Strings miteinander?](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenating_strings)
- [Können Sie Strings und Zahlen zusammenfügen?](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings)
- [Wie finden Sie die Länge eines Strings heraus?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [Wie finden Sie heraus, welches Zeichen sich an einer bestimmten Position in einem String befindet?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie finden und extrahieren Sie einen bestimmten Teilstring aus einem String?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändern Sie die Schreibweise eines Strings?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [Wie ersetzen Sie einen bestimmten Teilstring durch einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellen Sie ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#creating_arrays)
- [Wie greifen Sie auf die Elemente eines Arrays zu und ändern sie?](/de/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (einschließlich mehrdimensionaler Arrays)
- [Wie finden Sie die Länge eines Arrays heraus?](/de/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [Wie fügen Sie einem Array Elemente hinzu?](/de/docs/Learn_web_development/Core/Scripting/Arrays#adding_items)
- [Wie entfernen Sie Elemente aus einem Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#removing_items)
- [Wie teilen Sie einen String in Array-Elemente auf oder fügen Array-Elemente zu einem String zusammen?](/de/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### Debugging von JavaScript

- [Was für grundlegende Fehlertypen gibt es?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [Was sind Browser-Entwicklungstools und wie greifen Sie auf sie zu?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [Wie protokollieren Sie einen Wert in der JavaScript-Konsole?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [Wie verwenden Sie Breakpoints und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

Weitere Informationen zum Debuggen von JavaScript finden Sie unter [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript). Siehe auch [Weitere häufige Fehler](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) für eine Beschreibung häufiger Fehler.

### Entscheidungen im Code treffen

- [Wie führen Sie verschiedene Codeblöcke aus, abhängig vom Wert einer Variablen oder einer anderen Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Wie verwenden Sie if ...else-Anweisungen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements)
- [Wie nisten Sie einen Entscheidungsblock in einen anderen ein?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if...else)
- [Wie verwenden Sie UND, ODER und NICHT Operatoren in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [Wie behandeln Sie bequem eine große Anzahl von Auswahlmöglichkeiten für eine Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [Wie verwenden Sie einen ternären Operator, um schnell zwischen zwei Optionen zu wählen, basierend auf einem wahr oder falsch Test?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führen Sie denselben Codeblock immer wieder aus?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Wie verlassen Sie eine Schleife vor dem Ende, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [Wie überspringen Sie zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [Wie verwenden Sie while und do...while Schleifen?](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)

## Fortgeschrittene Anwendungsfälle

### Funktionen

- [Wie finden Sie Funktionen im Browser?](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [Wie erstellen Sie Ihre eigenen Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [Wie führen Sie eine Funktion aus (aufrufen oder invokieren)?](/de/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions)
- [Wie legen Sie Parameter (oder Argumente) fest, wenn Sie eine Funktion aufrufen?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_parameters)
- [Was ist Funktionsumfang?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Return_values)

### Objekte

- [Wie erstellen Sie ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [Wie erhalten und setzen Sie die Methoden und Eigenschaften eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [Was ist `this` im Kontext eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object-oriented_programming_from_10000_meters)
- [Was sind Konstruktoren und Instanzen, und wie erstellen Sie sie?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [Welche verschiedenen Möglichkeiten gibt es, um Objekte in JavaScript zu erstellen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [Wie strukturieren Sie JSON-Daten und lesen diese aus JavaScript?](/de/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [Wie können Sie eine JSON-Datei in eine Seite laden?](/de/docs/Learn_web_development/Core/Scripting/JSON#loading_our_json)
- [Wie konvertieren Sie ein JSON-Objekt in eine Textzeichenkette und zurück?](/de/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Ereignisse

- [Was sind Ereignishandler und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [Was sind Inplace-Ereignishandler?](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_don%27t_use_these)
- [Was macht die `addEventListener()`-Funktion und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [Welchen Mechanismus sollten Sie verwenden, um Ereigniscode zu Ihren Webseiten hinzuzufügen?](/de/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_i_use)
- [Was sind Ereignisobjekte und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [Wie verhindern Sie das Standardverhalten von Ereignissen?](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior)
- [Wie wird das Ereignis auf verschachtelten Elementen ausgelöst? (Ereignisausbreitung, auch in Verbindung mit — Ereignisblasen und -erfassung)](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Was ist Ereignisdelegation und wie funktioniert sie?](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Was ist die Konstruktor-Eigenschaft, und wie können Sie sie verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_constructor_property)
- [Wie fügen Sie Methoden zum Konstruktor hinzu?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#modifying_prototypes)
- [Wie erstellen Sie einen neuen Konstruktor, der seine Mitglieder von einem Elternkonstruktor erbt?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [Wann sollten Sie Vererbung in JavaScript verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object_member_summary)

### Web-APIs

- [Wie manipulieren Sie das DOM (z.B. Hinzufügen oder Entfernen von Elementen) mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation)
