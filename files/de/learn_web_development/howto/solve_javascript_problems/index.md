---
title: Häufige JavaScript-Probleme lösen
short-title: Häufige JavaScript-Probleme
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

Die folgenden Links verweisen auf Lösungen für häufige Probleme, die beim Schreiben von JavaScript auftreten können.

## Häufige Anfängerfehler

### Korrekte Rechtschreibung und Groß-/Kleinschreibung

Wenn Ihr Code nicht funktioniert und/oder der Browser meldet, dass etwas undefiniert ist, überprüfen Sie, ob Sie alle Ihre Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufige eingebaute Browserfunktionen, die Probleme verursachen, sind:

| Korrekt                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position des Semikolons

Stellen Sie sicher, dass Sie keine Semikolons falsch platzieren. Zum Beispiel:

| Korrekt                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt einige Dinge, die bei Funktionen schiefgehen können.

Einer der häufigsten Fehler ist, die Funktion zu deklarieren, sie aber nirgendwo aufzurufen. Zum Beispiel:

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

Denken Sie daran, dass [Funktionen ihren eigenen Bereich haben](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) — Sie können nicht auf den Wert einer Variablen zugreifen, die innerhalb einer Funktion gesetzt wurde, von außerhalb der Funktion, es sei denn, Sie haben die Variable global (d.h. nicht innerhalb von Funktionen) deklariert oder [den Wert](/de/docs/Learn_web_development/Core/Scripting/Return_values) von der Funktion zurückgegeben.

#### Code nach einer Return-Anweisung ausführen

Denken Sie auch daran, dass wenn Sie von einer Funktion zurückkehren, der JavaScript-Interpreter die Funktion verlässt — kein Code nach der Return-Anweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) eine Fehlermeldung in der Entwicklerkonsole aus, wenn Sie Code nach einer Return-Anweisung haben. Firefox gibt Ihnen "unerreichbarer Code nach der Rückgabeanweisung".

### Objekt-Notation versus normale Zuweisung

Wenn Sie in JavaScript etwas normal zuweisen, verwenden Sie ein einzelnes Gleichheitszeichen, z.B.:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) müssen Sie jedoch darauf achten, die korrekte Syntax zu verwenden. Das Objekt muss von geschweiften Klammern umgeben sein, Mitgliedsnamen müssen durch Doppelpunkte von ihren Werten getrennt werden, und Mitglieder müssen durch Kommas getrennt werden. Zum Beispiel:

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
- [Was ist ein Event?](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Was ist ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist JSON?](/de/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json)
- [Was ist eine Web-API?](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#what_are_apis)
- [Was ist das DOM?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)

## Grundlegende Anwendungsfälle

### Allgemein

- [Wie fügen Sie Ihrer Seite JavaScript hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [Wie fügen Sie JavaScript-Code Kommentare hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#comments)

### Variablen

- [Wie deklarieren Sie eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#declaring_a_variable)
- [Wie initialisieren Sie eine Variable mit einem Wert?](/de/docs/Learn_web_development/Core/Scripting/Variables#initializing_a_variable)
- [Wie aktualisieren Sie den Wert einer Variablen?](/de/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable) (siehe auch [Zuweisungsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators))
- [Welche Datentypen können Werte in JavaScript haben?](/de/docs/Learn_web_development/Core/Scripting/Variables#variable_types)
- [Was bedeutet 'locker typisiert'?](/de/docs/Learn_web_development/Core/Scripting/Variables#dynamic_typing)

### Mathematik

- [Welche Arten von Zahlen haben Sie im Web-Entwicklungsbereich zu behandeln?](/de/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [Wie führen Sie grundlegende mathematische Operationen in JavaScript durch?](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [Was ist Operatorrangfolge, und wie wird sie in JavaScript behandelt?](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [Wie erhöhen oder verringern Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [Wie vergleichen Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (z.B. um zu sehen, welches größer ist, oder um zu überprüfen, ob ein Wert gleich einem anderen ist).

### Strings

- [Wie erstellen Sie einen String in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Strings#declaring_strings)
- [Müssen Sie einfache oder doppelte Anführungszeichen verwenden?](/de/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_double_quotes_and_backticks)
- [Wie verbinden Sie Strings miteinander?](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_in_context)
- [Können Sie Strings und Zahlen miteinander verbinden?](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings)
- [Wie finden Sie die Länge eines Strings heraus?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [Wie finden Sie heraus, welches Zeichen an einer bestimmten Position in einem String ist?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie finden und extrahieren Sie einen bestimmten Teilstring aus einem String?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändern Sie die Groß-/Kleinschreibung eines Strings?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [Wie ersetzen Sie einen bestimmten Teilstring durch einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellen Sie ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#creating_arrays)
- [Wie greifen Sie auf die Elemente eines Arrays zu bzw. ändern diese?](/de/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (einschließlich mehrdimensionaler Arrays)
- [Wie finden Sie die Länge eines Arrays heraus?](/de/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [Wie fügen Sie einem Array Elemente hinzu?](/de/docs/Learn_web_development/Core/Scripting/Arrays#adding_items)
- [Wie entfernen Sie Elemente aus einem Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#removing_items)
- [Wie teilen Sie einen String in Array-Elemente auf oder fügen Array-Elemente zu einem String zusammen?](/de/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### JavaScript-Debugging

- [Was sind die grundlegenden Fehlertypen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [Was sind Browser-Entwicklerwerkzeuge und wie greifen Sie darauf zu?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [Wie protokollieren Sie einen Wert in die JavaScript-Konsole?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [Wie verwenden Sie Breakpoints und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

Für weitere Informationen zum JavaScript-Debugging siehe [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript). Außerdem finden Sie unter [Andere häufige Fehler](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) eine Beschreibung häufiger Fehler.

### Entscheidungen im Code treffen

- [Wie führen Sie verschiedene Codeblöcke aus, abhängig vom Wert einer Variablen oder einer anderen Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Wie verwenden Sie if ...else-Anweisungen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements)
- [Wie schachteln Sie einen Entscheidungsblock in einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if...else)
- [Wie verwenden Sie UND, ODER und NICHT-Operatoren in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [Wie behandeln Sie bequem eine große Anzahl von Auswahlmöglichkeiten für eine Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [Wie verwenden Sie einen bedingten Operator, um schnell zwischen zwei Optionen zu wählen, basierend auf einem wahr oder falsch Test?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führen Sie denselben Codeabschnitt immer wieder aus?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Wie verlassen Sie eine Schleife vorzeitig, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [Wie überspringen Sie zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [Wie verwenden Sie while- und do...while-Schleifen?](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while)

## Zwischenstufe Anwendungsfälle

### Funktionen

- [Wie finden Sie Funktionen im Browser?](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [Wie erstellen Sie Ihre eigenen Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [Wie führen Sie eine Funktion aus (aufrufen oder aktivieren)?](/de/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions_and_arrow_functions)
- [Wie geben Sie Parameter (oder Argumente) bei der Aktivierung einer Funktion an?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_parameters)
- [Was ist der Funktionsbereich?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte, und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Return_values)

### Objekte

- [Wie erstellen Sie ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [Wie greifen Sie auf die Methoden und Eigenschaften eines Objekts zu und setzen sie?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [Was ist `this` im Kontext eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
- [Was sind Konstruktoren und Instanzen, und wie erstellen Sie sie?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming#classes_and_instances)

### JSON

- [Wie strukturieren Sie JSON-Daten und lesen sie aus JavaScript?](/de/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [Wie konvertieren Sie ein JSON-Objekt in eine Textzeichenfolge und zurück?](/de/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Events

- [Was sind Event-Handler und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [Was sind Inline-Event-Handler?](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these)
- [Was macht die Funktion `addEventListener()` und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [Was sind Event-Objekte und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [Wie verhindern Sie das Standardverhalten eines Events?](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior)
- [Wie feuern Events auf verschachtelten Elementen? (Event-Propagation, auch bezogen auf Event-Bubbling und -Capturing)](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Was ist Event-Delegation und wie funktioniert es?](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Wie fügen Sie dem Konstruktor Methoden hinzu?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#setting_a_prototype)
- [Wie erstellen Sie einen neuen Konstruktor, der seine Mitglieder von einem Elternkonstruktor erbt?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [Wann sollten Sie Vererbung in JavaScript verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming#inheritance)

### Web-APIs

- [Wie manipulieren Sie das DOM (z.B. hinzufügen oder entfernen von Elementen) mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation)
