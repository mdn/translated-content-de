---
title: Veraltete Elementreferenz
slug: Web/WebDriver/Errors/StaleElementReference
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **fehlerhafte Verweis auf veraltete Elemente** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, weil das referenzierte [Webelement](/de/docs/Web/WebDriver/WebElement) nicht mehr mit dem [DOM](/de/docs/Glossary/DOM) verbunden ist.

Jedes DOM-Element wird in WebDriver durch eine eindeutige Identifikationsreferenz repräsentiert, bekannt als ein _[Webelement](/de/docs/Web/WebDriver/WebElement)_. Die Webelement-Referenz ist ein {{Glossary("UUID")}}, der verwendet wird, um Befehle für spezielle Elemente auszuführen, wie z.B. [den Tag-Namen eines Elements abrufen](/de/docs/Web/WebDriver/Commands/GetElementTagName) und [eine Eigenschaft abrufen](/de/docs/Web/WebDriver/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr mit dem DOM verbunden ist, d.h. es wurde aus dem Dokument entfernt oder das Dokument hat sich geändert, gilt es als _veraltet_. Veralterung tritt beispielsweise auf, wenn Sie eine Webelement-Referenz haben und das Dokument, aus dem es abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Bei der Navigation werden alle Webelement-Referenzen auf das vorherige Dokument zusammen mit dem Dokument verworfen. Dies wird dazu führen, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit einem Fehler der veralteten Elementreferenz fehlschlägt:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<strong>foo</strong>"))
foo = session.find_element_by_css_selector("strong")

session.get(inline("<i>bar</i>"))
try:
    foo.tag_name
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Ausgabe:

```plain
StaleElementReferenceException: Die Elementreferenz von e75a1764-ff73-40fa-93c1-08cb90394b65 ist veraltet. Entweder ist das Element nicht mehr mit dem DOM verbunden, es befindet sich nicht im aktuellen Frame-Kontext, oder das Dokument wurde aktualisiert.
```

### Knotenentfernung

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird seine Webelement-Referenz ungültig. Dies wird auch dazu führen, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit einem Fehler der veralteten Elementreferenz fehlschlägt:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<button>foo</button>"))
button = session.find_element_by_css_selector("button")
session.execute_script("""
    let [button] = arguments;
    button.remove();
    """, script_args=(button,))

try:
    button.click()
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Ausgabe:

```plain
StaleElementReferenceException: Die Elementreferenz von e75a1764-ff73-40fa-93c1-08cb90394b65 ist veraltet. Entweder ist das Element nicht mehr mit dem DOM verbunden, es befindet sich nicht im aktuellen Frame-Kontext, oder das Dokument wurde aktualisiert.
```

## Siehe auch

- [WebElement](/de/docs/Web/WebDriver/WebElement)
- Zugehörige Befehle:

  - [Element finden](/de/docs/Web/WebDriver/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Commands/FindElements)
  - [Element vom Element finden](/de/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Elemente vom Element finden](/de/docs/Web/WebDriver/Commands/FindElementsFromElement)
