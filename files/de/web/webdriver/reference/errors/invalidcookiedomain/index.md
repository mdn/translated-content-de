---
title: "`invalid cookie domain` Fehlercode"
short-title: invalid cookie domain
slug: Web/WebDriver/Reference/Errors/InvalidCookieDomain
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der **invalid cookie domain**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein illegaler Versuch unternommen wurde, ein {{Glossary("Cookie", "Cookie")}} unter einer anderen {{Glossary("Domain", "Domain")}} als der des aktuellen Dokuments zu setzen.

Im WebDriver ist es nicht erlaubt, Cookies für andere Domains als die Domain des {{Glossary("Browsing_context", "aktuellen Browsing-Kontextes")}}'s [Dokuments](/de/docs/Web/API/Document) zu setzen.

Dieser Fehler tritt auch auf, wenn das Dokument _cookie-averse_ ist, das heißt, wenn das Dokument nicht über `http://`, `https://` oder `ftp://` geladen wurde.

## Beispiel

### Andere Domains

Wenn die aktuelle Domain `example.com` wäre, wäre es nicht möglich, ein [Cookie hinzuzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie) für die Domain `example.org`:

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

Dieser Fehler kann auch auftreten, wenn Sie ein cookie-averses Dokument besuchen, wie z.B. eine Datei auf Ihrer lokalen Festplatte:

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
  - [Cookie hinzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
  - [Cookie löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
  - [Alle Cookies löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
  - [Alle Cookies abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
  - [Benanntes Cookie abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
