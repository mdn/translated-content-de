---
title: Invalid cookie domain
slug: Web/WebDriver/Errors/InvalidCookieDomain
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **invalid cookie domain** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein illegaler Versuch unternommen wurde, ein {{Glossary("Cookie", "Cookie")}} unter einer anderen {{Glossary("Domain", "Domain")}} als der des aktuellen Dokuments zu setzen.

Im WebDriver ist es nicht erlaubt, Cookies für andere Domains als die Domain des {{Glossary("Browsing_context", "aktuellen Browser-Kontexts")}}'s [Dokuments](/de/docs/Web/API/Document) zu setzen.

Dieser Fehler tritt auch auf, wenn das Dokument _cookie-averse_ ist, also wenn das Dokument nicht über `http://`, `https://` oder `ftp://` geladen wird.

## Beispiel

### Andere Domains

Wenn die aktuelle Domain `example.com` wäre, wäre es nicht möglich, ein [Cookie hinzuzufügen](/de/docs/Web/WebDriver/Commands/AddCookie) für die Domain `example.org`:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- Relevante WebDriver-Kommandos:

  - [Add Cookie](/de/docs/Web/WebDriver/Commands/AddCookie)
  - [Delete Cookie](/de/docs/Web/WebDriver/Commands/DeleteCookie)
  - [Delete All Cookies](/de/docs/Web/WebDriver/Commands/DeleteAllCookies)
  - [Get All Cookies](/de/docs/Web/WebDriver/Commands/GetAllCookies)
  - [Get Named Cookie](/de/docs/Web/WebDriver/Commands/GetNamedCookie)
