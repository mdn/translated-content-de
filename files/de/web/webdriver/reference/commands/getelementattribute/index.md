---
title: Attribut eines Elements abrufen
slug: Web/WebDriver/Reference/Commands/GetElementAttribute
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der Befehl _Attribut eines Elements abrufen_ der [WebDriver](/de/docs/Web/WebDriver)-API gibt das Attribut des referenzierten [Webelements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, wird das Attribut `"//TODO"` zurückgegeben, was dem Aufruf von [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann es anders großgeschrieben sein.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Kennung des Attributs des [Webelements](/de/docs/Web/WebDriver/WebElement), das abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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
