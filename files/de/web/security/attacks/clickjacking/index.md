---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: d67650e38cd150ce190e5116355fcb362eb759bd
---

Bei einem **Clickjacking**-Angriff wird der Benutzer dazu gebracht, mit einer Zielseite auf eine Weise zu interagieren, die er nicht beabsichtigt hat.

Dazu erstellt der Angreifer eine Attrappen-Website, die die Zielseite des Benutzers in einem {{htmlelement("iframe")}}-Element einbettet. Die Angreifer-Website verbirgt das `<iframe>` und richtet einige Attrappen-Elemente so aus, dass sie an derselben Stelle erscheinen wie die Elemente auf der Zielseite, die sensible Aktionen auslösen. Wenn der Benutzer versucht, mit diesen Attrappen-Elementen zu interagieren, interagiert er stattdessen unbeabsichtigt mit der Zielseite und kann dazu verleitet werden, ungewollte Aktionen mit der Zielseite durchzuführen.

## Ein Clickjacking-Beispiel

Angenommen, die Website der Bank des Benutzers ist `https://my-bank.example.com`. Der Benutzer bleibt normalerweise auf dieser Seite angemeldet. Zur Vereinfachung nehmen wir an, dass die Seite über einen Button verfügt, mit dem alle Gelder des Benutzers an den Angreifer überwiesen werden können – obwohl dies offensichtlich unrealistisch ist, ist es plausibel, dass die Seite einige interaktive Elemente hat, die eine sensible Operation ausführen.

![Screenshot einer Bankwebsite, die einen Button mit der Aufschrift „Transferiere all mein Geld?“ zeigt.](my-bank.png)

Der Angreifer erstellt eine Webseite, die Folgendes enthält:

- ein {{htmlelement("button")}}-Element, dessen Inhalt den Benutzer zum Klicken ermutigt
- ein {{htmlelement("iframe")}}-Element, das die Bankseite einbettet.

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

In dem CSS für die Seite sorgt der Angreifer dafür, dass:

- das `<iframe>` verborgen wird, zum Beispiel durch Setzen der {{cssxref("opacity")}} auf null
- der Button so positioniert wird, dass er an derselben Stelle ist wie der „Transferiere all dein Geld?“-Button.

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

![Screenshot einer Clickjacking-Website, welche die Bank-Website eingebettet zeigt.](attacker.png)

Wenn der Benutzer versucht, auf „Klicken Sie hier für ein kostenloses Kätzchen!“ zu klicken, klickt er tatsächlich auf den unsichtbaren „Transferiere all dein Geld?“-Button auf der Bank-Website. Ist der Benutzer bereits angemeldet, dann wird die Anfrage, die dadurch an den Bank-Server gesendet wird, die echten Anmeldedaten des Benutzers beinhalten und die Anfrage wird erfolgreich sein.

## Clickjacking-Abwehrmaßnahmen

### Einbettungen einschränken

Clickjacking hängt davon ab, dass die Zielwebsite innerhalb der Attrappen-Website des Angreifers in einem `<iframe>` eingebettet wird. Die Hauptverteidigung besteht darin, diese Fähigkeit zu verbieten oder zumindest einzuschränken.

Hierfür gibt es zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP). Mit dieser Direktive können Sie genau steuern, welche anderen Dokumente Ihre einbetten dürfen.
- Der {{httpheader("X-Frame-Options")}}-HTTP-Header. Dieser Header ist weniger detailliert: Er ermöglicht es Ihnen nur, das Einbetten vollständig zu deaktivieren oder es nur für [gleich-originäre](/de/docs/Web/Security/Defenses/Same-origin_policy) Dokumente zu erlauben.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Durch das Setzen von `X-Frame-Options` zusätzlich zu `frame-ancestors` können Sie das Einbetten in Browsern verhindern, die `frame-ancestors` nicht unterstützen. Da [die Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), ist dies kein großes Problem.

Wenn sowohl `frame-ancestors` als auch `X-Frame-Options` gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`.

### Einschränkung von Cross-Site-Cookies

Als weitere teilweise Abschwächung sollten Websites das Cookie-Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) für Sitzungs-Cookies auf `Lax` oder `Strict` setzen. Anfragen aus eingebetteten Kontexten wie `<iframe>`-Elementen, die nicht {{Glossary("Site", "gleichseitig")}} mit dem obersten Dokument sind, werden diese Cookies nicht enthalten, und der Server wird die Anfrage daher nicht als von einem angemeldeten Benutzer kommend behandeln.

## Zusammenfassung der Abwehrmaßnahmen

- Setzen Sie die [`frame-ancestors`](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) CSP-Direktive und den {{httpheader("X-Frame-Options")}} HTTP-Antwort-Header, um zu verhindern, dass andere Websites Ihre als `<iframe>` einbetten, oder um streng zu kontrollieren, welche Sites sie einbetten dürfen.

- Setzen Sie das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attribut für Sitzungs-Cookies auf `Lax` oder `Strict`.

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
