---
title: Häufige JavaScript-Probleme lösen
short-title: Häufige JavaScript-Probleme
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: 9460d587cd7ec549f83621777d123d754dd6e68c
---

Die folgenden Links führen zu Lösungen für häufige Probleme, die beim Schreiben von JavaScript auftreten können.

## Häufige Anfängerfehler

### Richtige Rechtschreibung und Groß-/Kleinschreibung

Wenn Ihr Code nicht funktioniert und/oder der Browser bemängelt, dass etwas undefiniert ist, überprüfen Sie, ob Sie alle Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufige eingebaute Browser-Funktionen, die Probleme verursachen, sind:

| Richtig                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position des Semikolons

Sie müssen sicherstellen, dass Sie keine Semikolons falsch platzieren. Zum Beispiel:

| Richtig                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt eine Reihe von Dingen, die mit Funktionen schiefgehen können.

Einer der häufigsten Fehler ist es, die Funktion zu deklarieren, aber sie nirgends aufzurufen. Zum Beispiel:

```js
function myFunction() {
  alert("This is my function.");
}
```

Dieser Code wird nichts bewirken, es sei denn, Sie rufen ihn mit der folgenden Anweisung auf:

```js
myFunction();
```

#### Funktionsbereich

Denken Sie daran, dass [Funktionen ihren eigenen Bereich haben](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) — Sie können von außerhalb der Funktion nicht auf einen innerhalb der Funktion gesetzten Variablenwert zugreifen, es sei denn, Sie haben die Variable global deklariert (d.h. nicht innerhalb einer Funktion), oder Sie [geben den Wert zurück](/de/docs/Learn_web_development/Core/Scripting/Return_values).

#### Code nach einer return-Anweisung ausführen

Denken Sie auch daran, dass der JavaScript-Interpreter bei einem `return`-Aufruf die Funktion verlässt — kein Code nach der return-Anweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) Ihnen eine Fehlermeldung in der Entwicklerkonsole, wenn Sie Code nach einer return-Anweisung haben. Firefox gibt Ihnen "unerreichbarer Code nach der return-Anweisung".

### Objektnotation versus normale Zuweisung

Wenn Sie in JavaScript etwas normal zuweisen, verwenden Sie ein einzelnes Gleichheitszeichen, zum Beispiel:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) müssen Sie jedoch darauf achten, die richtige Syntax zu verwenden. Das Objekt muss von geschweiften Klammern umgeben sein, Mitgliedsnamen müssen mit Doppelpunkten von ihren Werten getrennt werden, und Mitglieder müssen durch Kommata getrennt werden. Zum Beispiel:

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

- [Wie fügen Sie Ihrer Seite JavaScript hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [Wie fügen Sie JavaScript-Code Kommentare hinzu?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#comments)

### Variablen

- [Wie deklarieren Sie eine Variable?](/de/docs/Learn_web_development/Core/Scripting/Variables#declaring_a_variable)
- [Wie initialisieren Sie eine Variable mit einem Wert?](/de/docs/Learn_web_development/Core/Scripting/Variables#initializing_a_variable)
- [Wie aktualisieren Sie den Wert einer Variablen?](/de/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable) (siehe auch [Zuweisungsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators))
- [Welche Datentypen können Werte in JavaScript haben?](/de/docs/Learn_web_development/Core/Scripting/Variables#variable_types)
- [Was bedeutet 'locker typisiert'?](/de/docs/Learn_web_development/Core/Scripting/Variables#dynamic_typing)

### Mathematik

- [Mit welchen Zahlentypen müssen Sie in der Webentwicklung umgehen?](/de/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [Wie machen Sie grundlegende Mathematik in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [Was ist Operatorenreihenfolge, und wie wird sie in JavaScript gehandhabt?](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [Wie inkrementieren und dekrementieren Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [Wie vergleichen Sie Werte in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (z.B., um zu sehen, welcher größer ist, oder um zu sehen, ob ein Wert gleich einem anderen ist).

### Strings

- [Wie erstellen Sie einen String in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Strings#declaring_strings)
- [Müssen Sie einfache oder doppelte Anführungszeichen verwenden?](/de/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_double_quotes_and_backticks)
- [Wie verbinden Sie Zeichenfolgen miteinander?](/de/docs/Learn_web_development/Core/Scripting/Strings#concatenation_in_context)
- [Können Sie Zeichenfolgen und Zahlen zusammenfügen?](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings)
- [Wie finden Sie die Länge einer Zeichenfolge?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [Wie finden Sie heraus, welches Zeichen sich an einer bestimmten Position in einer Zeichenfolge befindet?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie finden und extrahieren Sie eine bestimmte Teilzeichenfolge aus einer Zeichenfolge?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändern Sie die Groß-/Kleinschreibung einer Zeichenfolge?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [Wie ersetzen Sie eine bestimmte Teilzeichenfolge durch eine andere?](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellen Sie ein Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#creating_arrays)
- [Wie greifen Sie auf die Elemente in einem Array zu und ändern diese?](/de/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (dies schließt mehrdimensionale Arrays ein)
- [Wie finden Sie die Länge eines Arrays heraus?](/de/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [Wie fügen Sie Elemente zu einem Array hinzu?](/de/docs/Learn_web_development/Core/Scripting/Arrays#adding_items)
- [Wie entfernen Sie Elemente aus einem Array?](/de/docs/Learn_web_development/Core/Scripting/Arrays#removing_items)
- [Wie teilen Sie einen String in Array-Elemente auf oder verbinden Array-Elemente zu einem String?](/de/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### JavaScript-Debugging

- [Was sind die grundlegenden Fehlertypen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [Was sind Entwicklertools im Browser, und wie greifen Sie auf diese zu?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [Wie protokollieren Sie einen Wert in der JavaScript-Konsole?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [Wie verwenden Sie Haltepunkte und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

Für weitere Informationen zum Debuggen von JavaScript, siehe [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript). Siehe auch [Andere häufige Fehler](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) für eine Beschreibung häufig auftretender Fehler.

### Entscheidungen im Code treffen

- [Wie führen Sie unterschiedliche Codeblöcke aus, abhängig vom Wert einer Variablen oder einer anderen Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Wie verwenden Sie if ...else-Anweisungen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements)
- [Wie schachteln Sie einen Entscheidungsblock in einen anderen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if...else)
- [Wie verwenden Sie UND, ODER und NICHT-Operatoren in JavaScript?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [Wie behandeln Sie auf bequeme Weise eine große Anzahl von Auswahlmöglichkeiten für eine Bedingung?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [Wie verwenden Sie einen ternären Operator, um eine schnelle Wahl zwischen zwei Optionen basierend auf einem Test, der wahr oder falsch ergibt, zu treffen?](/de/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führen Sie denselben Codeabschnitt immer wieder aus?](/de/docs/Learn_web_development/Core/Scripting/Loops)
- [Wie brechen Sie eine Schleife vorzeitig ab, wenn eine bestimmte Bedingung eintritt?](/de/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [Wie überspringen Sie zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung eintritt?](/de/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [Wie verwenden Sie while- und do...while-Schleifen?](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while)

## Anwendungsfälle für Fortgeschrittene

### Funktionen

- [Wie finden Sie Funktionen im Browser?](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [Wie erstellen Sie Ihre eigenen Funktionen?](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [Wie führen Sie eine Funktion aus (aufrufen oder invoken)?](/de/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions_and_arrow_functions)
- [Wie spezifizieren Sie Parameter (oder Argumente), wenn Sie eine Funktion aufrufen?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_arguments_and_parameters)
- [Was ist Funktionsbereich?](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte, und wie verwenden Sie diese?](/de/docs/Learn_web_development/Core/Scripting/Return_values)

### Objekte

- [Wie erstellen Sie ein Objekt?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [Wie erhalten und setzen Sie die Methoden und Eigenschaften eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [Was ist `this` im Kontext eines Objekts?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
- [Was sind Konstruktoren und Instanzen, und wie erstellen Sie diese?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming#classes_and_instances)

### JSON

- [Wie strukturieren Sie JSON-Daten, und lesen Sie sie mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [Wie konvertieren Sie ein JSON-Objekt in einen Textstring und umgekehrt?](/de/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Ereignisse

- [Was sind Ereignishandler und wie verwenden Sie diese?](/de/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [Was sind Inline-Ereignishandler?](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these)
- [Was macht die `addEventListener()`-Funktion, und wie verwenden Sie sie?](/de/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [Was sind Ereignisobjekte, und wie verwenden Sie diese?](/de/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [Wie verhindern Sie das Standardverhalten eines Ereignisses?](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior)
- [Wie feuern Ereignisse auf verschachtelten Elementen? (Ereignisausbreitung, auch relevant — Ereignisbubbling und Capturing)](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Was ist Ereignisdelegation, und wie funktioniert sie?](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Wie fügen Sie Methoden zum Konstruktor hinzu?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#setting_a_prototype)
- [Wie erstellen Sie einen neuen Konstruktor, der seine Mitglieder von einem übergeordneten Konstruktor erbt?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [Wann sollten Sie Vererbung in JavaScript verwenden?](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming#inheritance)

### Web-APIs

- [Wie manipulieren Sie das DOM (z.B. Elemente hinzufügen oder entfernen) mit JavaScript?](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation)
