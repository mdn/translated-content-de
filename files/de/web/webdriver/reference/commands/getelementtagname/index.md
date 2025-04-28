---
title: Abrufen des Element-Tag-Namens
slug: Web/WebDriver/Reference/Commands/GetElementTagName
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Abrufen des Element-Tag-Namens_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Tag-Namen des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, wird der zurückgegebene Tag-Name `"IMG"` sein, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann die Großschreibung abweichen.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.
- `element id`
  - : Identifikator des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), von dem der Tag-Name abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`Fenster`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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
