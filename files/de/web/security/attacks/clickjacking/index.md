---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Bei einem **Clickjacking**-Angriff lässt der Angreifer den Benutzer auf einer Zielseite interagieren, ohne dass dieser es beabsichtigt.

Dazu erstellt der Angreifer eine Tarnseite, die die Zielseite des Benutzers innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Die Seite des Angreifers versteckt das `<iframe>` und positioniert einige Tarn-Elemente so, dass sie an der gleichen Stelle erscheinen wie Elemente auf der Zielseite, die sensible Aktionen auslösen. Wenn der Benutzer versucht, mit diesen Tarn-Elementen zu interagieren, interagiert er stattdessen unabsichtlich mit der Zielseite und kann dazu verleitet werden, Aktionen auf der Zielseite auszuführen, die er nicht beabsichtigt hat.

## Ein Clickjacking-Beispiel

Nehmen wir an, die Website der Bank des Benutzers ist `https://my-bank.example.com`. Der Benutzer bleibt typischerweise auf dieser Seite eingeloggt. Der Einfachheit halber nehmen wir an, dass die Seite eine Schaltfläche hat, die alle Gelder des Benutzers an den Angreifer überträgt – obwohl dies offensichtlich unrealistisch ist, ist es denkbar, dass die Seite einige interaktive Elemente hat, die eine sensible Operation durchführen.

![Screenshot einer Bank-Website, die einen Button mit der Aufschrift "Transfer all my money?" zeigt.](my-bank.png)

Der Angreifer erstellt eine Webseite, die Folgendes enthält:

- ein {{htmlelement("button")}}-Element, dessen Inhalt den Benutzer dazu ermutigt, es zu klicken
- ein {{htmlelement("iframe")}}-Element, das die Seite der Bank einbettet.

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

Im CSS für die Seite:

- versteckt der Angreifer das `<iframe>`, beispielsweise indem er seine {{cssxref("opacity")}} auf null setzt
- positioniert der Angreifer den Button so, dass er an der gleichen Stelle ist wie der "Transfer all your money?"-Button.

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

Das Ergebnis sieht dann so aus (wir haben die `<iframe>`-Deckkraft auf `0.1` gesetzt, damit Sie die Überlagerung sehen können):

![Screenshot einer Clickjacking-Website, die die Bank-Website eingebettet zeigt.](attacker.png)

Wenn der Benutzer versucht, auf "Click here for a free kitten!" zu klicken, klickt er tatsächlich auf den unsichtbaren "Transfer all your money?"-Button auf der Website der Bank. Wenn der Benutzer bereits eingeloggt ist, wird die Anfrage, die an den Server der Bank gesendet wird, die echten Benutzerdaten enthalten, und die Anfrage wird erfolgreich sein.

## Clickjacking-Abwehrmaßnahmen

Clickjacking hängt davon ab, dass die Zielwebsite in der Tarnseite des Angreifers innerhalb eines `<iframe>`-Elements eingebettet wird. Die Hauptabwehrmaßnahme besteht darin, diese Fähigkeit zu verbieten oder zumindest zu kontrollieren.

Es gibt hier zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("X-Frame-Options")}}-Response-Header.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Durch das Setzen von `X-Frame-Options` sowie `frame-ancestors` können Sie das Einbetten in Browsern verhindern, die `frame-ancestors` nicht unterstützen. Da [die Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), ist dies kein großes Anliegen.

Wenn sowohl `frame-ancestors` als auch `X-Frame-Options` gesetzt sind, werden Browser, die `frame-ancestors` unterstützen, `X-Frame-Options` ignorieren.

Als zusätzliche teilweise Abschwächung sollten Seiten das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut für Session-Cookies auf `Lax` oder `Strict` setzen. Anfragen aus eingebetteten Kontexten wie `<iframe>`-Elementen, die nicht {{Glossary("Site", "first-party")}} mit dem übergeordneten Dokument sind, werden diese Cookies nicht beinhalten, und der Server wird die Anfrage daher nicht als von einem eingeloggten Benutzer stammend behandeln.

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)
