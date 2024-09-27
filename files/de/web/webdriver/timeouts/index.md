---
title: Timeouts
slug: Web/WebDriver/Timeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver")}}

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Timeout-Definitionen verknüpft, die das Verhalten für [Script-Injektion](#script), [Dokumentnavigation](#pageload) und [Elementabfrage](#implicit) steuern.

Das _[Timeouts-Objekt](#payload)_ wird in einigen unterschiedlichen Kontexten verwendet. Es kann als Konfiguration beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) über [Capabilities](/de/docs/Web/WebDriver/Capabilities) verwendet werden. Es wird als Teil der übereinstimmenden, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) verwendet.

Die Standardwerte können beim [Erstellen der Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) überschrieben werden und bleiben bis zum Schließen der Sitzung wirksam. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standardwerte überschrieben und sind für die gesamte Lebensdauer der Sitzung oder bis ein weiterer Aufruf von [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts) erfolgt, wirksam.

## Payload

Das **Timeouts-Objekt** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder als Eingabe beim Konfigurieren der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Suchstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements zu wiederholen. Standardwert ist 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden abschließt. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Erreichung der Script-Timeout-Dauer, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Script-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts)-Befehl oder als Teil der [Timeouts-Fähigkeit](/de/docs/Web/WebDriver/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) verwendet wird, sind alle Felder optional. Dies bedeutet, dass Sie null oder mehr der Timeout-Dauerwerte individuell oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Commands/GetTimeouts) oder in den übereinstimmenden Fähigkeiten nach [Erstellung einer Sitzung](/de/docs/Web/WebDriver/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Timeout-Konfiguration beim Sitzungsstart

Sie können die Standard-Timeouts der Sitzung überschreiben, indem Sie ein [Timeouts-Fähigkeiten-Objekt](/de/docs/Web/WebDriver/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

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

### Timeouts zur Laufzeit setzen und abfragen

Timeouts können auch zur Laufzeit mit dem Set Timeouts-Befehl festgelegt werden. Diese überschreiben die aktuellen Sitzungs-Timeouts und werden für die gesamte Lebensdauer der Sitzung oder bis zum nächsten Aufruf desselben Befehls wirksam:

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

{{QuickLinksWithSubpages}}
