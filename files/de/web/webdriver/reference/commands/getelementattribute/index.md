---
title: Holen Sie sich das Elementattribut
slug: Web/WebDriver/Reference/Commands/GetElementAttribute
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Get Element Attribute_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt das Attribut des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Wenn es sich zum Beispiel bei dem Element um ein {{HTMLElement("img")}} handelt, wird das Attribut `"//TODO"` zurückgegeben, was dem Aufruf von [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) auf dem Element entspricht. Für XML/XHTML-Dokumente kann es unterschiedlich großgeschrieben sein.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), dessen Tag-Namen Sie erhalten möchten.
- `name`
  - : Kennung des Attributs des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), das Sie erhalten möchten.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie zum Beispiel [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie erledigt ist.

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
