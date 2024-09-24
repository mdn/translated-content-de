---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Attributes), die Möglichkeiten definieren, Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an Unterstützungstechnologien weitergegeben werden können, wenn kein anderer Mechanismus vorhanden ist. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Updates von Inhalten und mehr.

> [!WARNING]
> Viele dieser Widgets werden vollständig in modernen Browsern unterstützt. **Entwickler sollten bevorzugt das korrekte semantische HTML-Element anstelle von ARIA verwenden**, wenn ein solches Element existiert. Beispielsweise haben native Elemente integrierte [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie jedoch ARIA verwenden, sind Sie dafür verantwortlich, das äquivalente Browserverhalten im Skript nachzubilden.

[Die erste Regel von ARIA](https://www.w3.org/TR/using-aria/#rule1) besagt: "Wenn Sie ein natives HTML-Element oder Attribut mit der Semantik und dem Verhalten, das Sie benötigen, bereits integriert verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Es gibt ein Sprichwort "Keine ARIA ist besser als schlechte ARIA." In [WebAims Umfrage über eine Million Startseiten](https://webaim.org/projects/million/#aria) fanden sie heraus, dass Startseiten mit ARIA durchschnittlich 41 % mehr erkannte Fehler hatten als solche ohne ARIA. Während ARIA entwickelt wurde, um Webseiten zugänglicher zu machen, kann es bei falscher Anwendung mehr Schaden als Nutzen anrichten.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} gebaut, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) geben die minimalen und maximalen Werte für den Fortschrittsbalken an, und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) beschreibt den aktuellen Status davon und muss daher mit JavaScript aktualisiert werden.

Zusammen mit der direkten Platzierung im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

```js
// Finden Sie den Fortschrittsbalken <div> im DOM.
const progressBar = document.getElementById("percent-loaded");

// Legen Sie seine ARIA-Rollen und -Zustände fest,
// damit Unterstützungstechnologien wissen, um welche Art von Widget es sich handelt.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Erstellen Sie eine Funktion, die jederzeit aufgerufen werden kann, um
// den Wert des Fortschrittsbalkens zu aktualisieren.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

Alle Inhalte, die für Nutzer ohne Unterstützungstechnologien verfügbar sind, müssen auch für Unterstützungstechnologien verfügbar gemacht werden. Ebenso sollten keine Funktionen hinzugefügt werden, die sich ausschließlich an Nutzer von Unterstützungstechnologien richten, die nicht auch für solche zugänglich sind, die keine Unterstützungstechnologien verwenden. Der oben gezeigte Fortschrittsbalken muss gestaltet werden, damit er wie ein Fortschrittsbalken aussieht.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zulässig; sein Mindestwert ist immer `0`.

> [!NOTE]
> HTML-Bereichselemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} usw.) haben integrierte implizite ARIA-Rollen, daher besteht keine Notwendigkeit, diese zu duplizieren.

## Unterstützung

Wie bei jeder anderen Webtechnologie gibt es unterschiedliche Unterstützungsgrade für ARIA. Die Unterstützung basiert auf dem verwendeten Betriebssystem und Browser sowie der Art der damit verbundenen Unterstützungstechnologie. Darüber hinaus sind die Version des Betriebssystems, Browsers und der Unterstützungstechnologie entscheidende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, bieten nur teilweise Unterstützung oder geben ihre Funktionalität falsch an.

Es ist auch wichtig anzuerkennen, dass einige Menschen, die auf Unterstützungstechnologien angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn/Accessibility/HTML), wann immer möglich, da semantisches HTML weitaus besser mit Unterstützungstechnologien unterstützt wird.

Es ist ebenfalls wichtig, das erstellte ARIA mit tatsächlichen Unterstützungstechnologien zu testen. Browser-Emulatoren und -Simulatoren sind nicht wirklich effektiv, um die volle Unterstützung zu testen. Ebenso sind Proxy-Unterstützungstechnologielösungen nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Referenzseiten, die alle auf MDN besprochenen WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Referenzseiten, die alle auf MDN besprochenen WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorenpraktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente, wie man am besten gängige Widgets und Interaktionen mit ARIA versieht. Eine hervorragende Ressource.

## ARIA für geskriptete Widgets

- [Schreiben von tastaturbedienbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. haben integrierte Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA "fälschen", müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live-Bereiche bieten Bildschirmlesegeräten Vorschläge, wie Änderungen am Inhalt einer Seite zu behandeln sind.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, um ARIA zu verstehen:

[ARIA, Accessibility APIs und Coden wie Sie es ernst meinen! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
