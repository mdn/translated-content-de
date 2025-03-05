---
title: Abrufen des Element-Tag-Namens
slug: Web/WebDriver/Reference/Commands/GetElementTagName
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

Der _Befehl zum Abrufen des Element-Tag-Namens_ der [WebDriver](/de/docs/Web/WebDriver)-API gibt den Tag-Namen des referenzierten [Webelements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element beispielsweise ein {{HTMLElement("img")}} ist, wird der zurückgegebene Tag-Name `"IMG"` sein, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Für XML/XHTML-Dokumente kann er anders dargestellt werden.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.

### Fehler

- [Session nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was bedeutet, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

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
