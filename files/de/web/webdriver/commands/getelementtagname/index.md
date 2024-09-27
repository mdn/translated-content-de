---
title: Element-Tag-Namen abrufen
slug: Web/WebDriver/Commands/GetElementTagName
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Element Tag Name_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Tag-Namen des referenzierten [Webelements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element beispielsweise ein {{HTMLElement("img")}} ist, wird der zurückgegebene Tag-Name `"IMG"` sein, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann die Groß- und Kleinschreibung unterschiedlich sein.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Webelements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.

### Fehler

- [Session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [No such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Beispiele

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = driver.find_element_by_id("q")

print(search_box.tag_name)
```

Ausgabe:

```plain
INPUT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
