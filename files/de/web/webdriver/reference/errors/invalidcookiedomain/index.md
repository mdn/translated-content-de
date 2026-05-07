---
title: "`invalid cookie domain` Fehlercode"
short-title: invalid cookie domain
slug: Web/WebDriver/Reference/Errors/InvalidCookieDomain
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **invalid cookie domain** Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn versucht wird, ein ungültiges {{Glossary("Cookie", "Cookie")}} für eine andere {{Glossary("Domain", "Domain")}} als die des aktuellen Dokuments zu setzen.

In WebDriver ist es nicht erlaubt, Cookies für andere Domains als die Domain des {{Glossary("Browsing_context", "aktuellen Browsing-Kontexts")}}'s [Dokuments](/de/docs/Web/API/Document) zu setzen.

Dieser Fehler tritt auch auf, wenn das Dokument _cookie-averse_ ist, das heißt, wenn das Dokument nicht über `http://`, `https://` oder `ftp://` geladen wird.

## Beispiel

### Andere Domains

Wenn die aktuelle Domain `example.com` wäre, wäre es nicht möglich, ein [Cookie hinzuzufügen](/de/docs/Web/WebDriver/Reference/Commands/AddCookie) für die Domain `example.org`:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("https://example.com/")
try:
    cookie = {"name": "foo",
              "value": "bar",
              "domain": "example.org"}
    session.add_cookie(cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
```

Ausgabe:

```plain
InvalidCookieDomainException: https://example.org/
```

### Cookie-averse Dokumente

Dieser Fehler kann auch auftreten, wenn Sie ein cookie-averses Dokument besuchen, wie zum Beispiel eine Datei auf Ihrer lokalen Festplatte:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("file:///home/jdoe/document.html")
try:
    foo_cookie = {"name": "foo", "value": "bar"}
    session.add_cookie(foo_cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
```

Ausgabe:

```plain
InvalidCookieDomainException: Document is cookie-averse
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- Relevante WebDriver-Befehle:
  - [Add Cookie](/de/docs/Web/WebDriver/Reference/Commands/AddCookie)
  - [Delete Cookie](/de/docs/Web/WebDriver/Reference/Commands/DeleteCookie)
  - [Delete All Cookies](/de/docs/Web/WebDriver/Reference/Commands/DeleteAllCookies)
  - [Get All Cookies](/de/docs/Web/WebDriver/Reference/Commands/GetAllCookies)
  - [Get Named Cookie](/de/docs/Web/WebDriver/Reference/Commands/GetNamedCookie)
