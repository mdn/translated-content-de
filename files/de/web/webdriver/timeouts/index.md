---
title: Timeouts
slug: Web/WebDriver/Timeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

Mit einer [WebDriver](/de/docs/Web/WebDriver) Sitzung sind verschiedene Timeout-Definitionen verbunden, die das Verhalten für [Skripteinjektion](#script), [Dokumentnavigation](#pageload) und [Elementabfrage](#implicit) steuern.

Das _[Timeouts-Objekt](#payload)_ wird in verschiedenen Kontexten verwendet. Es kann als Konfiguration beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) durch [Capabilities](/de/docs/Web/WebDriver/Capabilities) genutzt werden, es wird als Teil der abgestimmten, effektiven Capabilities zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) verwendet.

Die Standardwerte können beim [Erstellen der Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) überschrieben werden und sind bis zum Schließen der Sitzung wirksam. Wenn Sie während der Laufzeit der Sitzung [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) aufrufen, werden die Standardwerte überschrieben und sind für die Dauer der Sitzung wirksam oder bis [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) erneut aufgerufen wird.

## Payload

Das **Timeouts-Objekt** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder als Eingabe zum Konfigurieren der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementstandortstrategie](/de/docs/Web/WebDriver/WebElement) zu wiederholen, wenn ein Element gefunden wird. Standardmäßig beträgt dieser Wert 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument vollständig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Erreichung der Skript-Timeout-Dauer, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) oder als Teil der [Timeouts-Capability](/de/docs/Web/WebDriver/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie individuell oder insgesamt null oder mehr der Timeout-Dauerwerte konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) oder in den abgestimmten Capabilities nach dem [Erstellen einer Sitzung](/de/docs/Web/WebDriver/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Festlegen von Timeouts bei Sitzungsbeginn

Sie können die Standard-Timeouts einer Sitzung überschreiben, indem Sie ein [Timeouts-Capability-Objekt](/de/docs/Web/WebDriver/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

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

### Festlegen und Abrufen von Timeouts zur Laufzeit

Timeouts können auch zur Laufzeit mit dem Befehl Set Timeouts festgelegt werden. Diese überschreiben die aktuellen Timeouts der Sitzung und sind für die gesamte Dauer der Sitzung wirksam oder bis ein nachfolgender Aufruf an denselben Befehl erfolgt:

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

{{QuickLinksWithSubpages}}
