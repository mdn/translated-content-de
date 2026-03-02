---
title: WebDriver classic Timeouts
short-title: Timeouts
slug: Web/WebDriver/Reference/Classic/Timeouts
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Timeout-Definitionen verbunden, die das Verhalten für [Script-Injektion](#script), [Dokumentnavigation](#pageload) und [Elementabruf](#implicit) steuern.

Das _[timeouts object](#payload)_ finden Sie in einigen verschiedenen Kontexten. Es kann als Konfiguration verwendet werden, wenn [eine neue Sitzung erstellt wird](/de/docs/Web/WebDriver/Reference/Commands/NewSession) über [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities), es wird als Teil der abgeglichenen, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) verwendet.

Die Standardwerte können bei [Erstellung der Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) überschrieben werden, und sie sind bis zum Schließen der Sitzung wirksam. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standardwerte überschrieben und gelten für die Lebensdauer der Sitzung oder bis [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) erneut aufgerufen wird.

## Payload

Das **timeouts object** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder als Eingabe bei der Konfiguration der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Suchstrategie](/de/docs/Web/WebDriver/Reference/WebElement) bei der Suche nach einem Element zu wiederholen. Standardmäßig ist dies auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig sind es 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts)-Befehl oder als Teil der [timeouts capability](/de/docs/Web/WebDriver/Reference/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Timeout-Dauer-Werte individuell oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) oder in den abgeglichenen Fähigkeiten aus der [erstellten Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Timeouts bei der Sitzungs-Erstellung festlegen

Sie können die standardmäßigen Sitzungs-Timeouts überschreiben, indem Sie ein [timeouts capabilities object](/de/docs/Web/WebDriver/Reference/Capabilities) angeben, wenn Sie eine neue WebDriver-Sitzung starten:

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox(capabilities={"timeouts": {"implicit": 4500}})
session.get(inline("""
    <h1>Example</h1>

    <script>
      // Inserts <p> below <h1> after 2.5 seconds:
      setTimeout(() => {
        const delayedElement = document.createElement("p");
        const h1 = document.querySelector("h1");
        document.body.insertAfter(delayedElement, h1);
      }, 2500);
    </script>
    """)

# This will cause the driver to wait 4.5 seconds
# for #foo to appear in the DOM:
delayed_element = session.find_element_by_tag_name("p")
```

### Timeouts zur Laufzeit festlegen und abrufen

Timeouts können auch zur Laufzeit mit dem Befehl Set Timeouts festgelegt werden. Diese überschreiben die aktuellen Sitzungs-Timeouts und werden für die gesamte Lebensdauer der Sitzung wirksam oder bis ein nachfolgender Aufruf desselben Befehls erfolgt:

```python
from selenium import webdriver

session = webdriver.Firefox()

session.set_timeouts({"implicit": 4.5})
print(session.get_timeouts)
```

Die Ausgabe wird in Sekunden erfolgen, da dies die idiomatische Zeiteinheit in Python ist:

```json
{ "implicit": 4.5, "script": 300, "pageLoad": 30000 }
```
