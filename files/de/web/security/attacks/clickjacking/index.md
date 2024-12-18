---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

Bei einem **Clickjacking**-Angriff wird der Benutzer dazu gebracht, mit einer Zielseite auf eine Weise zu interagieren, die er nicht beabsichtigt hat.

Um dies zu erreichen, erstellt der Angreifer eine Lockvogel-Seite, die die Zielseite des Benutzers innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Die Seite des Angreifers verbirgt das `<iframe>` und richtet einige Lockvogel-Elemente so aus, dass sie an derselben Stelle erscheinen wie die Elemente auf der Zielseite, die sensible Aktionen auslösen. Wenn der Benutzer versucht, mit diesen Lockvogel-Elementen zu interagieren, interagiert er tatsächlich mit der Zielseite und kann dazu gebracht werden, dort Aktionen durchzuführen, die er nicht beabsichtigt hat.

## Ein Clickjacking-Beispiel

Nehmen wir an, die Website der Bank des Benutzers ist `https://my-bank.example.com`. Der Benutzer bleibt in der Regel auf dieser Seite angemeldet. Zur Vereinfachung sagen wir, dass die Seite über eine Schaltfläche verfügt, die alle Gelder des Benutzers an den Angreifer überträgt — obwohl dies offensichtlich unrealistisch ist, ist es plausibel, dass die Seite einige interaktive Elemente hat, die eine sensible Operation durchführen.

![Screenshot einer Bank-Website mit einem Button "Transfer all my money?"](my-bank.png)

Der Angreifer erstellt eine Webseite, die enthält:

- ein {{htmlelement("button")}}-Element, dessen Inhalt den Benutzer ermutigt, darauf zu klicken
- ein {{htmlelement("iframe")}}-Element, das die Bank-Seite einbettet.

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

Im CSS der Seite sorgt der Angreifer dafür, dass:

- das `<iframe>` versteckt wird, zum Beispiel durch Setzen der {{cssxref("opacity")}} auf null
- der Button so platziert wird, dass er an derselben Stelle wie der Button "Transfer all your money?" ist.

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

Das Ergebnis sieht folgendermaßen aus (wir haben die `<iframe>`-Transparenz auf `0.1` gesetzt, damit Sie die Überlagerung sehen können):

![Screenshot einer Clickjacking-Website, die die Bank-Website eingebettet zeigt.](attacker.png)

Wenn der Benutzer versucht, auf "Click here for a free kitten!" zu klicken, klickt er tatsächlich auf den unsichtbaren "Transfer all your money?"-Button auf der Bank-Website. Wenn der Benutzer bereits angemeldet ist, wird die Anforderung, die an den Server der Bank gesendet wird, die echten Anmeldedaten des Benutzers enthalten und die Anforderung wird erfolgreich ausgeführt.

## Clickjacking-Abwehrmaßnahmen

Clickjacking hängt von der Tatsache ab, dass die Zielwebsite in der Lockvogel-Seite des Angreifers innerhalb eines `<iframe>` eingebettet ist. Die Hauptabwehrmaßnahme besteht darin, diese Möglichkeit zu verbieten oder zumindest zu kontrollieren.

Hierfür gibt es zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/CSP#clickjacking_protection) in einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP)
- Der {{httpheader("X-Frame-Options")}}-Antwortheader.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Durch das Setzen von `X-Frame-Options` und `frame-ancestors` kann das Einbetten in Browsern verhindert werden, die `frame-ancestors` nicht unterstützen. Da [die Unterstützung für `frame-ancestors` in Browsern sehr gut ist](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), ist dies kein großes Problem.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`.

Als zusätzliche partielle Gegenmaßnahme sollten Websites das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut für Sitzungs-Cookies auf `Lax` oder `Strict` setzen. Anfragen aus eingebetteten Kontexte wie `<iframe>`-Elementen, die nicht {{Glossary("Site", "same-site")}} mit dem obersten Dokument sind, werden diese Cookies nicht enthalten, und der Server wird die Anfrage daher nicht als von einem angemeldeten Benutzer kommend behandeln.

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
