---
title: Häufige JavaScript-Probleme lösen
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die folgenden Links verweisen auf Lösungen für häufige Probleme, die bei der Programmierung mit JavaScript auftreten können.

## Häufige Anfängerfehler

### Korrekte Schreibweise und Groß-/Kleinschreibung

Wenn Ihr Code nicht funktioniert und/oder der Browser meldet, dass etwas undefiniert ist, überprüfen Sie, ob Sie alle Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufig verwendete integrierte Browserfunktionen, die Probleme verursachen, sind:

| Richtig                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position des Semikolons

Stellen Sie sicher, dass Sie keine Semikolons an falschen Stellen setzen. Zum Beispiel:

| Richtig                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt mehrere Dinge, die bei Funktionen schiefgehen können.

Ein häufiger Fehler ist es, die Funktion zu deklarieren, sie jedoch nirgendwo aufzurufen. Zum Beispiel:

```js
function myFunction() {
  alert("This is my function.");
}
```

Dieser Code wird nichts tun, es sei denn, Sie rufen ihn mit der folgenden Anweisung auf:

```js
myFunction();
```

#### Funktionsbereich

Denken Sie daran, dass [Funktionen ihren eigenen Gültigkeitsbereich haben](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) – Sie können von außerhalb der Funktion nicht auf eine innerhalb der Funktion gesetzte Variable zugreifen, es sei denn, Sie haben die Variable global deklariert (d.h. nicht innerhalb einer Funktion) oder [den Wert aus der Funktion zurückgegeben](/de/docs/Learn_web_development/Core/Scripting/Return_values).

#### Ausführen von Code nach einer return-Anweisung

Beachten Sie auch, dass der JavaScript-Interpreter die Funktion verlässt, wenn Sie eine return-Anweisung ausführen – kein Code nach der return-Anweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) Ihnen eine Fehlermeldung in der Entwicklerkonsole, wenn Sie Code nach einer return-Anweisung haben. Firefox gibt: "unreachable code after return statement".

### Objektnotation versus normale Zuweisung

Wenn Sie in JavaScript normalerweise etwas zuweisen, verwenden Sie ein einzelnes Gleichheitszeichen, z. B.:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) müssen Sie jedoch darauf achten, die korrekte Syntax zu verwenden. Das Objekt muss von geschweiften Klammern umgeben sein, die Mitgliedsnamen müssen durch Doppelpunkte von ihren Werten getrennt sein und die Mitglieder müssen durch Kommas getrennt sein. Zum Beispiel:

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
- [Was ist eine Web-API?](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#what_are_apis)
- [Was ist das DOM?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)

## Grundlegende Anwendungsfälle

### Allgemein

- [Wie fügt man einer Seite JavaScript hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [Wie fügt man Kommentare zum JavaScript-Code hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#comments)

### Variablen

- [Wie deklariert man eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#declaring_a_variable)
- [Wie initialisiert man eine Variable mit einem Wert?](/de/docs/Learn_web_development/Core/Scripting/Variables#initializing_a_variable)
- [Wie aktualisiert man den Wert einer Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable) (siehe auch [Zuweisungsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators))
- [Welche Datentypen können Werte in JavaScript haben?](/de/docs/Learn_web_development/Core/Scripting/Variables#variable_types)
- [Was bedeutet 'lose typisiert'?](/de/docs/Learn_web_development/Core/Scripting/Variables#dynamic_typing)

### Mathematik

- [Mit welchen Typen von Zahlen hat man in der Webentwicklung zu tun?](/de/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [Wie macht man grundlegende Mathematik in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [Was ist Operator-Präzedenz, und wie wird sie in JavaScript gehandhabt?](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [Wie erhöht oder verringert man Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [Wie vergleicht man Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (z. B. um zu sehen, welcher größer ist, oder ob ein Wert gleich einem anderen ist).

### Strings

- [Wie erstellt man einen String in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Strings#creating_a_string)
- [Muss man einfache oder doppelte Anführungszeichen verwenden?](/de/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_vs._double_quotes)
- [Wie entkommt man Zeichen in Strings?](/de/docs/Learn_web_development/Core/Scripting/Strings#escaping_characters_in_a_string)
- [Wie verbindet man Strings miteinander?](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenating_strings)
- [Kann man Strings und Zahlen miteinander verbinden?](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings)
- [Wie ermittelt man die Länge eines Strings?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [Wie findet man heraus, welches Zeichen an einer bestimmten Position in einem String ist?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie findet und extrahiert man eine bestimmte Teilzeichenfolge aus einem String?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändert man die Groß-/Kleinschreibung eines Strings?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [Wie ersetzt man eine spezifische Teilzeichenfolge durch eine andere?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellt man ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#creating_arrays)
- [Wie greift man auf die Elemente eines Arrays zu und modifiziert diese?](/de/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (dies umfasst auch mehrdimensionale Arrays)
- [Wie ermittelt man die Länge eines Arrays?](/de/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [Wie fügt man Elemente zu einem Array hinzu?](/de/docs/Learn_web_development/Core/Scripting/Arrays#adding_items)
- [Wie entfernt man Elemente aus einem Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#removing_items)
- [Wie splittet man einen String in Array-Elemente oder verbindet Array-Elemente in einen String?](/de/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### JavaScript debuggen

- [Was sind die grundlegenden Arten von Fehlern?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [Was sind Browser-Entwicklertools und wie greift man darauf zu?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [Wie loggt man einen Wert in die JavaScript-Konsole?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [Wie verwendet man Breakpoints und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

Für weitere Informationen über das Debuggen von JavaScript, siehe [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript). Siehe auch [Andere häufige Fehler](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) für eine Beschreibung häufiger Fehler.

### Entscheidungen im Code treffen

- [Wie führt man verschiedene Code-Blöcke aus, abhängig vom Wert einer Variable oder einer anderen Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Wie verwendet man if...else Anweisungen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements)
- [Wie verschachtelt man einen Entscheidungsblock in einem anderen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if...else)
- [Wie verwendet man UND, ODER, und NICHT Operatoren in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [Wie behandelt man bequem eine große Anzahl von Auswahlmöglichkeiten für eine Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [Wie verwendet man einen ternären Operator, um schnell zwischen zwei Optionen zu wählen, basierend auf einem True- oder False-Test?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führt man denselben Codeabschnitt immer wieder aus?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Wie verlässt man eine Schleife vorzeitig, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [Wie überspringt man zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [Wie verwendet man while und do...while Schleifen?](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)

## Mittelstufe Anwendungsfälle

### Funktionen

- [Wie findet man Funktionen im Browser?](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [Wie erstellt man eigene Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [Wie führt man eine Funktion aus (aufrufen oder auslösen)?](/de/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions)
- [Wie gibt man Parameter (oder Argumente) an, wenn man eine Funktion aufruft?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_parameters)
- [Was ist der Funktionsbereich?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte, und wie verwendet man sie?](/de/docs/Learn_web_development/Core/Scripting/Return_values)

### Objekte

- [Wie erstellt man ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [Wie erhält und setzt man die Methoden und Eigenschaften eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [Was ist `this` im Kontext eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object-oriented_programming_from_10000_meters)
- [Was sind Konstruktoren und Instanzen, und wie erstellt man sie?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [Welche verschiedenen Möglichkeiten gibt es, Objekte in JavaScript zu erstellen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [Wie strukturiert man JSON-Daten und liest sie in JavaScript ein?](/de/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [Wie kann man eine JSON-Datei in eine Seite laden?](/de/docs/Learn_web_development/Core/Scripting/JSON#loading_our_json)
- [Wie konvertiert man ein JSON-Objekt in einen Textstring und zurück?](/de/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Events

- [Was sind Event-Handler und wie benutzt man sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [Was sind Inline-Event-Handler?](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_don%27t_use_these)
- [Was macht die `addEventListener()`-Funktion und wie benutzt man sie?](/de/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [Welchen Mechanismus sollte ich verwenden, um Event-Code zu meinen Webseiten hinzuzufügen?](/de/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_i_use)
- [Was sind Event-Objekte und wie verwendet man sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [Wie verhindert man das standardmäßige Verhalten eines Events?](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior)
- [Wie feuern Events auf verschachtelten Elementen ab? (Event-Propagation, auch zugehörig — Event-Bubbling und -Capturing)](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Was ist Event-Delegation und wie funktioniert sie?](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Was ist die constructor-Eigenschaft und wie kann man sie verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_constructor_property)
- [Wie fügt man Methoden zum Konstruktor hinzu?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#modifying_prototypes)
- [Wie erstellt man einen neuen Konstruktor, der seine Mitglieder von einem Eltern-Konstruktor erbt?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [Wann sollte man Vererbung in JavaScript verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object_member_summary)

### Web-APIs

- [Wie manipuliert man das DOM (z.B. Hinzufügen oder Entfernen von Elementen) mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation)
