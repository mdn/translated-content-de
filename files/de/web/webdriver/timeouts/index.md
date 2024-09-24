---
title: Zeitüberschreitungen
slug: Web/WebDriver/Timeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Zeitüberschreitungsdefinitionen verbunden, die das Verhalten für [Skriptinjektion](#script), [Dokumentnavigation](#pageload) und [Elementabfrage](#implicit) kontrollieren.

Sie finden das _[timeouts object](#payload)_, das in mehreren Kontexten verwendet wird. Es kann als Konfiguration beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) durch [capabilities](/de/docs/Web/WebDriver/Capabilities) verwendet werden. Es wird als Teil der abgeglichenen, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) verwendet.

Die Standardwerte können beim [Erstellen der Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) überschrieben werden und sind wirksam, bis die Sitzung geschlossen wird. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standards überschrieben und gelten für die Lebensdauer der Sitzung oder bis [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) erneut aufgerufen wird.

## Payload

Das **timeouts object** ist ein JSON-Objekt, das entweder die Zeitüberschreitungswerte der aktuellen Sitzung beschreibt oder als Eingabe verwendet wird, wenn die Zeitüberschreitungen konfiguriert werden:

- `implicit`
  - : Zeit in Millisekunden, um die [element location strategy](/de/docs/Web/WebDriver/WebElement) beim Finden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument vollständig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skriptzeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Script Timeout Error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig sind dies 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) oder als Teil der [timeouts capability](/de/docs/Web/WebDriver/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Zeitüberschreitungsdauerwerte einzeln oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) oder in den übereinstimmten Fähigkeiten nach [Erstellen einer Sitzung](/de/docs/Web/WebDriver/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Einstellen von Zeitüberschreitungen bei der Sitzungserstellung

Sie können die Standard-Zeitüberschreitungen der Sitzung überschreiben, indem Sie ein [timeouts capabilities object](/de/docs/Web/WebDriver/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox(capabilities={"timeouts": {"implicit": 4500}})
session.get(inline("""
    <h1>Beispiel</h1>

    <script>
      // Fügt <p> unter <h1> nach 2,5 Sekunden ein:
      setTimeout(() => {
        const delayedElement = document.createElement("p");
        const h1 = document.querySelector("h1");
        document.body.insertAfter(delayedElement, h1);
      }, 2500);
    </script>
    """)

# Dies wird den Treiber veranlassen, 4,5 Sekunden
# zu warten, bis #foo im DOM erscheint:
delayed_element = session.find_element_by_tag_name("p")
```

### Einstellen und Abrufen von Zeitüberschreitungen zur Laufzeit

Zeitüberschreitungen können auch zur Laufzeit mit dem Befehl Set Timeouts festgelegt werden. Diese überschreiben die aktuellen Zeitüberschreitungen der Sitzung und sind für die gesamte Lebensdauer der Sitzung wirksam oder bis ein erneuter Anruf an denselben Befehl erfolgt:

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
