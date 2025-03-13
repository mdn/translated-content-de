---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Bei einem **Clickjacking**-Angriff wird der Benutzer dazu verleitet, auf einer Zielseite in einer Art zu interagieren, die er nicht beabsichtigt hat.

Um dies zu tun, erstellt der Angreifer eine gefälschte Seite, die die Zielseite des Benutzers innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Die Seite des Angreifers verbirgt das `<iframe>` und richtet einige gefälschte Elemente so aus, dass sie an derselben Stelle erscheinen wie Elemente auf der Zielseite, die sensible Aktionen auslösen. Wenn der Benutzer versucht, mit diesen gefälschten Elementen zu interagieren, interagiert er stattdessen unabsichtlich mit der Zielseite und kann dazu verleitet werden, auf der Zielseite Aktionen auszuführen, die er nicht beabsichtigt hat.

## Ein Clickjacking-Beispiel

Angenommen, die Website der Bank des Benutzers ist `https://my-bank.example.com`. Der Benutzer bleibt normalerweise auf dieser Seite eingeloggt. Der Einfachheit halber sagen wir, dass die Seite einen Button hat, der alle Gelder des Benutzers an den Angreifer überweist — obwohl dies offensichtlich unrealistisch ist, ist es plausibel, dass die Seite einige interaktive Elemente hat, die eine sensible Operation durchführen.

![Screenshot der Website einer Bank, die einen Button "Transfer all my money?" zeigt.](my-bank.png)

Der Angreifer erstellt eine Webseite, die Folgendes enthält:

- ein {{htmlelement("button")}}-Element, dessen Inhalt den Benutzer ermutigt, darauf zu klicken
- ein {{htmlelement("iframe")}}-Element, das die Seite der Bank einbettet.

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

Im CSS für die Seite:

- verbirgt der Angreifer das `<iframe>`, indem er beispielsweise seine {{cssxref("opacity")}} auf null setzt
- positioniert er den Button so, dass er an derselben Stelle ist wie der "Transfer all your money?"-Button.

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

Das Ergebnis sieht so aus (wir haben die `<iframe>`-Opazität auf `0.1` gesetzt, damit Sie die Überlagerung sehen können):

![Screenshot einer Clickjacking-Website, die die Website der Bank eingebettet zeigt.](attacker.png)

Wenn der Benutzer versucht, auf "Click here for a free kitten!" zu klicken, wird er tatsächlich auf den unsichtbaren "Transfer all your money?"-Button der Bankseite klicken. Wenn der Benutzer bereits eingeloggt ist, wird die Anfrage, die an den Server der Bank gestellt wird, die echten Anmeldedaten des Benutzers enthalten und die Anfrage wird erfolgreich sein.

## Clickjacking-Verteidigungen

Clickjacking hängt davon ab, dass die Zielwebsite in der gefälschten Seite des Angreifers innerhalb eines `<iframe>` eingebettet wird. Die Hauptverteidigung besteht darin, diese Möglichkeit zu untersagen oder zumindest zu kontrollieren.

Es gibt zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)
- Der {{httpheader("X-Frame-Options")}}-Antwortheader.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Durch das Setzen von `X-Frame-Options` sowie `frame-ancestors` können Sie das Einbetten in Browsern verhindern, die `frame-ancestors` nicht unterstützen. Da [die Unterstützung von `frame-ancestors` durch Browser sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), ist dies kein großes Problem.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`.

Als zusätzliche partielle Abschwächung sollten Websites das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut für Sitzungs-Cookies auf `Lax` oder `Strict` setzen. Anfragen von eingebetteten Kontexten wie `<iframe>`-Elementen, die nicht {{Glossary("Site", "same-site")}} mit dem übergeordneten Dokument sind, werden diese Cookies nicht enthalten, und der Server wird die Anfrage daher nicht als von einem eingeloggt Benutzer kommend behandeln.

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
