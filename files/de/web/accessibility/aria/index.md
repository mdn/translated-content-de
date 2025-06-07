---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Reihe von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

ARIA ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an assistive Technologien weitergegeben werden können, wenn es keine andere Möglichkeit gibt. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

## Bevor Sie ARIA verwenden

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten das korrekte semantische HTML-Element über die Verwendung von ARIA bevorzugen**, wenn ein solches Element existiert. Zum Beispiel haben native Elemente integrierte [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich jedoch entscheiden, ARIA zu verwenden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten in Skripten nachzubilden.

[Die erste Regel von ARIA](https://w3c.github.io/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder Attribut verwenden können, das die von Ihnen benötigte Semantik und das Verhalten bereits eingebaut hat, anstatt ein Element neu zu interpretieren und eine ARIA-Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAims Umfrage über mehr als eine Million Startseiten](https://webaim.org/projects/million/#aria) fanden sie heraus, dass Startseiten mit ARIA durchschnittlich 41 % mehr erkannte Fehler aufwiesen als solche ohne ARIA. Während ARIA entwickelt wurde, um Webseiten zugänglicher zu machen, kann es bei falscher Anwendung mehr schaden als nützen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken ist mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) geben die Minimal- und Maximalwerte für den Fortschrittsbalken an, und das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) beschreibt den aktuellen Zustand und muss daher mit JavaScript aktualisiert werden.

Neben der direkten Platzierung im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

```js
// Find the progress bar <div> in the DOM.
const progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

Alle Inhalte, die für Benutzer nicht-assistiver Technologien verfügbar sind, müssen auch für assistive Technologien verfügbar gemacht werden. Ebenso sollten keine Funktionen aufgenommen werden, die nur für Benutzer assistiver Technologien zugänglich sind und nicht für diejenigen, die keine solchen Technologien verwenden. Der oben genannte Fortschrittsbalken muss gestylt werden, damit er wie ein Fortschrittsbalken aussieht.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zulässig; sein Minimalwert ist immer `0`.

> [!NOTE]
> HTML-Bereichselemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} usw.) haben eingebaute implizite ARIA-Rollen, daher ist es nicht erforderlich, diese zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es unterschiedliche Grade der Unterstützung für ARIA. Die Unterstützung basiert auf dem verwendeten Betriebssystem und Browser sowie der Art der assistiven Technologien, die damit interagieren. Außerdem sind die Versionen des Betriebssystems, des Browsers und der assistiven Technologien Einflussfaktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder melden deren Funktionalität falsch.

Es ist auch wichtig zu beachten, dass einige Menschen, die auf assistive Technologien angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML), wann immer dies möglich ist, da semantisches HTML weit bessere Unterstützung für assistive Technologien hat.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlichen assistiven Technologien zu testen. Dies liegt daran, dass Browser-Emulatoren und -Simulatoren für Tests auf vollständige Unterstützung nicht wirklich effektiv sind. Ebenso sind Proxy-Lösungen für assistive Technologien nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenz

Die [ARIA-Referenz](/de/docs/Web/Accessibility/ARIA/Reference) ist eine umfassende Liste von ARIA-Attributen und -Rollen, die auf MDN dokumentiert sind.

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die in HTML nicht nativ existieren oder die existieren, aber noch keine breite Browserunterstützung haben.
- [ARIA-Zustände und -Eigenschaften (Attribute)](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : ARIA-Attribute ermöglichen die Modifizierung von Zuständen und Eigenschaften eines Elements, wie sie im Barrierefreiheitsbaum definiert sind.

## Leitfäden

Die [ARIA-Leitfäden](/de/docs/Web/Accessibility/ARIA/Guides) und [Anleitungsseiten](/de/docs/Web/Accessibility/ARIA/How_to) sind Ressourcen, die Ihnen helfen, die Zugänglichkeit von Webseitenfunktionen wie Tabellen, Formularen und Tastaturnavigation zu verbessern.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorenschaftspraktiken](https://www.w3.org/WAI/ARIA/apg/)
  - : Die offiziellen Best-Practice-Dokumente zur besten Vorgehensweise bei der Implementierung von ARIA in gemeinsamen Widgets und Interaktionen. Eine ausgezeichnete Ressource.

## ARIA für gescriptete Widgets

- [JavaScript-Widgets mit Tastaturnavigation schreiben](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. haben eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA „faken“, müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
  - : Live-Bereiche geben Bildschirmlesern Vorschläge, wie Änderungen an den Inhalten einer Seite behandelt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs und codieren, als ob es Ihnen wichtig wäre! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
