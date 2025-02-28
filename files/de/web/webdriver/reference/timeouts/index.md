---
title: WebDriver-Zeitüberschreitungen
short-title: Timeouts
slug: Web/WebDriver/Reference/Timeouts
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Definitionen von Zeitüberschreitungen verbunden, die das Verhalten für [Skriptinjektion](#script), [Dokumentnavigation](#pageload) und [Elementwiederherstellung](#implicit) steuern.

Sie finden das _[timeouts object](#nutzlast)_ in einigen verschiedenen Kontexten. Es kann als Konfiguration verwendet werden, wenn Sie [eine neue Sitzung erstellen](/de/docs/Web/WebDriver/Commands/NewSession) durch [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities), es wird als Teil der übereinstimmenden, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Reference/Commands/GetTimeouts) verwendet.

Die Standardwerte können bei der [Erstellung der Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) überschrieben werden und sind wirksam, bis die Sitzung geschlossen wird. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standardwerte überschrieben und sind für die Lebensdauer der Sitzung wirksam oder bis [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) erneut aufgerufen wird.

## Nutzlast

Das **timeouts object** ist ein JSON-Objekt, das entweder die Zeitüberschreitungswerte der aktuellen Sitzung beschreibt, oder das als Eingabe bei der Konfiguration der Zeitüberschreitungen verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Ortungsstrategie](/de/docs/Web/WebDriver/WebElement) zu wiederholen, wenn ein Element gefunden wird. Das Standardwert ist 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument fertig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Erreichung der Skriptzeitüberschreitungsdauer, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Script Timeout Error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert ist 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) oder als Teil der [timeouts capability](/de/docs/Web/WebDriver/Reference/Capabilities) bei der [Erstellung einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Zeitüberschreitungswerte individuell oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Reference/Commands/GetTimeouts) oder in den übereinstimmenden Fähigkeiten aus [einer Sitzungserstellung](/de/docs/Web/WebDriver/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Festlegen von Zeitüberschreitungen bei Sitzungserstellung

Sie können die Standard-Zeitüberschreitungen der Sitzung überschreiben, indem Sie ein [timeouts capabilities object](/de/docs/Web/WebDriver/Reference/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

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

### Festlegen und Abrufen von Zeitüberschreitungen zur Laufzeit

Zeitüberschreitungen können auch zur Laufzeit mit dem Befehl Set Timeouts festgelegt werden. Diese überschreiben die aktuellen Zeitüberschreitungen der Sitzung und sind für die gesamte Dauer der Sitzung wirksam oder bis ein nachfolgender Aufruf desselben Befehls erfolgt:

```python
from selenium import webdriver

session = webdriver.Firefox()

session.set_timeouts({"implicit": 4.5})
print(session.get_timeouts)
```

Die Ausgabe erfolgt in Sekunden, da dies die idiomatische Zeiteinheit in Python ist:

```json
{ "implicit": 4.5, "script": 300, "pageLoad": 30000 }
```
