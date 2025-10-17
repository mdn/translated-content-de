---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Bei einem **Clickjacking**-Angriff täuscht ein Angreifer den Benutzer dazu, mit einer Zielseite auf eine Weise zu interagieren, die nicht beabsichtigt war.

Dazu erstellt der Angreifer eine Köderseite, die die Zielseite des Benutzers in einem {{htmlelement("iframe")}}-Element einbettet. Die Seite des Angreifers versteckt das `<iframe>` und richtet einige Köder-Elemente so aus, dass sie an derselben Stelle wie Elemente der Zielseite erscheinen, die sensible Aktionen auslösen. Wenn der Benutzer versucht, mit diesen Köder-Elementen zu interagieren, interagiert er tatsächlich unbeabsichtigt mit der Zielseite und könnte dazu verleitet werden, auf dieser Handlungen durchzuführen, die er nicht vorgesehen hatte.

## Ein Beispiel für Clickjacking

Angenommen, die Website der Bank des Benutzers ist `https://my-bank.example.com`. Der Benutzer bleibt in der Regel bei dieser Seite angemeldet. Zur Vereinfachung nehmen wir an, dass die Seite einen Button hat, mit dem alle Mittel des Benutzers auf den Angreifer übertragen werden — obwohl dies offensichtlich unrealistisch ist, ist es plausibel, dass die Seite einige interaktive Elemente hat, die sensible Operationen ausführen.

![Screenshot einer Bank-Website, die einen Button mit der Aufschrift "Transfer all my money?" zeigt.](my-bank.png)

Der Angreifer erstellt eine Webseite, die Folgendes enthält:

- ein {{htmlelement("button")}}-Element, dessen Inhalt den Benutzer zum Klick motiviert
- ein {{htmlelement("iframe")}}-Element, das die Seite der Bank einbettet.

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

Im CSS für die Seite sorgt der Angreifer dafür:

- dass das `<iframe>` versteckt wird, zum Beispiel durch Setzen der {{cssxref("opacity")}} auf Null
- dass der Button so positioniert wird, dass er an der gleichen Stelle wie der "Transfer all your money?" Button ist.

```css
iframe {
  opacity: 0;
}

#fake-button {
  position: absolute;
  top: 185px;
  left: 90px;
}
```

Das Ergebnis sieht so aus (wir haben die `<iframe>`-Deckkraft auf `0.1` gesetzt, damit Sie die Überlagerung sehen können):

![Screenshot einer Clickjacking-Website, die die Bankseite eingebettet zeigt.](attacker.png)

Wenn der Benutzer versucht, auf "Click here for a free kitten!" zu klicken, klickt er tatsächlich auf den unsichtbaren Button "Transfer all your money?" auf der Website der Bank. Wenn der Benutzer bereits angemeldet ist, wird die Anfrage an den Bankserver mit den echten Anmeldedaten des Benutzers gesendet, und die Anfrage wird erfolgreich sein.

## Schutzmaßnahmen gegen Clickjacking

Clickjacking beruht darauf, dass die Zielwebsite in der Köderseite des Angreifers in einem `<iframe>` eingebettet wird. Der Hauptschutz besteht darin, diese Fähigkeit entweder zu verbieten oder zumindest zu kontrollieren.

Hierfür gibt es zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("X-Frame-Options")}}-Antwort-Header.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Durch das Setzen von `X-Frame-Options` sowie `frame-ancestors` können Sie das Einbetten in Browsern verhindern, die `frame-ancestors` nicht unterstützen. Da die [Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), ist dies kein großes Problem.

Wenn sowohl `frame-ancestors` als auch `X-Frame-Options` gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`.

Als zusätzliche teilweise Abschwächung sollten Websites das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookieattribut für Sitzungscookies auf `Lax` oder `Strict` setzen. Anfragen aus eingebetteten Kontexten wie `<iframe>`-Elementen, die nicht {{Glossary("Site", "same-site")}} mit dem obersten Dokument sind, werden diese Cookies nicht enthalten, und der Server wird die Anfrage daher nicht als von einem angemeldeten Benutzer kommend behandeln.

## Checkliste zur Verteidigung

- Setzen Sie die [`frame-ancestors`](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection)-CSP-Direktive und den {{httpheader("X-Frame-Options")}}-HTTP-Antwort-Header, um zu verhindern, dass andere Seiten Ihre Seite als `<iframe>` einbetten, oder um streng zu kontrollieren, welche Seiten sie einbetten können.

- Setzen Sie das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookieattribut für Sitzungscookies auf `Lax` oder `Strict`.

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
