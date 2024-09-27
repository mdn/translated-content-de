---
title: Attribut des Elements abrufen
slug: Web/WebDriver/Commands/GetElementAttribute
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Element Attribute_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt das Attribut des referenzierten [Web-Elements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn zum Beispiel das Element ein {{HTMLElement("img")}} ist, wird das zurückgegebene Attribut `"//TODO"` sein, was dem Aufruf von [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) auf dem Element entspricht. Für XML/XHTML-Dokumente kann es anders großgeschrieben sein.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Web-Elements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Bezeichner des Attributs des [Web-Elements](/de/docs/Web/WebDriver/WebElement), das abgerufen werden soll.

### Fehler

- [Session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [No such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzer-Popup, wie zum Beispiel [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis es behandelt wird.

## Beispiele

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = session.find_element_by_id("q")

print(search_box.get_attribute("id"))
```

Ausgabe:

```plain
q
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
