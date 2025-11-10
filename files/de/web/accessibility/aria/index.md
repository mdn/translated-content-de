---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Wege definieren, um Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

ARIA ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen genutzt werden, an unterstützende Technologien weitergegeben werden können, wenn es keine andere Möglichkeit gibt. Beispielsweise ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

## Vor der Verwendung von ARIA

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten bevorzugt das richtige semantische HTML-Element verwenden, anstatt ARIA zu nutzen**, wenn ein solches Element existiert. Beispielsweise haben native Elemente eingebaute [Tastenzugänglichkeit](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich jedoch für die Verwendung von ARIA entscheiden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten im Skript nachzuahmen.

[Die erste Regel von ARIA](https://w3c.github.io/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder -Attribut mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein bestehendes Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Ein Sprichwort lautet: "Kein ARIA ist besser als schlechtes ARIA." In [WebAims Umfrage von über einer Million Startseiten](https://webaim.org/projects/million/#aria) fanden sie heraus, dass Startseiten mit vorhandenem ARIA durchschnittlich 41% mehr erkannte Fehler aufwiesen als solche ohne ARIA. Obwohl ARIA dazu gedacht ist, Webseiten zugänglicher zu machen, kann es bei falscher Verwendung mehr Schaden als Nutzen anrichten.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) geben die minimalen und maximalen Werte für den Fortschrittsbalken an, und das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) beschreibt den aktuellen Zustand davon und muss daher mit JavaScript aktualisiert werden.

Zusätzlich zum direkten Einfügen in das Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mithilfe von JavaScript-Code aktualisiert werden, wie hier gezeigt:

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

Alle Inhalte, die für Benutzer ohne unterstützende Technologien verfügbar sind, müssen auch unterstützenden Technologien zur Verfügung gestellt werden. Ebenso sollten keine Funktionen enthalten sein, die auf Benutzer unterstützender Technologien abzielen, die nicht auch für diejenigen zugänglich sind, die keine unterstützenden Technologien nutzen. Der obige Fortschrittsbalken muss gestylt werden, damit er wie ein Fortschrittsbalken aussieht.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zulässig; sein minimaler Wert ist immer `0`.

> [!NOTE]
> HTML-Kennzeichenelemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) haben eingebettete implizite ARIA-Rollen, daher gibt es keine Notwendigkeit, diese zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es unterschiedliche Unterstützungsgrade für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser sowie von der Art der damit interagierenden unterstützenden Technologie ab. Darüber hinaus sind die Versionen des Betriebssystems, des Browsers und der unterstützenden Technologie entscheidende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder melden deren Funktionalität falsch.

Es ist auch wichtig zu berücksichtigen, dass einige Menschen, die auf unterstützende Technologien angewiesen sind, zögerlich sind, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML), wann immer dies möglich ist, da semantisches HTML eine weitaus bessere Unterstützung für unterstützende Technologien bietet.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlicher unterstützender Technologie zu testen. Dies liegt daran, dass Browseremulatoren und Simulatoren nicht wirklich effektiv sind, um die vollständige Unterstützung zu testen. Ebenso sind Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenz

Die [ARIA-Referenz](/de/docs/Web/Accessibility/ARIA/Reference) ist eine umfassende Liste von ARIA-Attributen und -Rollen, die auf MDN dokumentiert sind.

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die in HTML nicht nativ existieren oder die existieren, aber noch keine breite Browserunterstützung haben.
- [ARIA-Zustände und -Eigenschaften (Attribute)](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : ARIA-Attribute ermöglichen das Modifizieren der Zustände und Eigenschaften eines Elements, wie im Barrierefreiheit-Baum definiert.

## Leitfaden

Die [ARIA-Leitfäden](/de/docs/Web/Accessibility/ARIA/Guides) sind Ressourcen, die Ihnen helfen, die Zugänglichkeit von Webseitenfunktionen wie Tabellen, Formularen und Tastaturnavigation zu verbessern.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Authoring-Praktiken](https://www.w3.org/WAI/ARIA/apg/)
  - : Die offiziellen Best-Practice-Dokumente, die beschreiben, wie man Widgets und Interaktionen am besten mit ARIA ausstattet. Eine ausgezeichnete Ressource.

## ARIA für geskriptete Widgets

- [Schreiben von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}}, etc. haben eingebaute Tastenzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA 'fälschen', müssen Sie sicherstellen, dass Ihre Widgets tastaturnutzbar sind.
- [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
  - : Live-Regionen geben Vorschläge für Bildschirmleser, wie Änderungen an den Inhalten einer Seite gehandhabt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
