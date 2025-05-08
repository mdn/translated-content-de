---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: a9c0161a34ba218e7acf6cdf0e93cbc0c36065a1
---

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

ARIA ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an unterstützende Technologien weitergegeben werden können, wenn es ansonsten keinen Mechanismus gibt. ARIA ermöglicht beispielsweise zugängliche JavaScript-Widgets, Formulartipps und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

## Bevor Sie ARIA verwenden

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten bevorzugen, das richtige semantische HTML-Element anstelle von ARIA zu verwenden**, wenn ein solches Element existiert. Native Elemente haben zum Beispiel eingebaute [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich jedoch entscheiden, ARIA zu verwenden, sind Sie dafür verantwortlich, das äquivalente Browserverhalten im Skript zu imitieren.

[Die erste Regel der ARIA-Nutzung](https://www.w3.org/TR/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder Attribut verwenden können, das bereits über die erforderlichen Semantiken und Verhaltensweisen verfügt, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAim's Untersuchung von über einer Million Homepages](https://webaim.org/projects/million/#aria) wurde festgestellt, dass Homepages mit ARIA im Durchschnitt 41 % mehr erkannte Fehler hatten als solche ohne ARIA. Während ARIA dazu gedacht ist, Webseiten zugänglicher zu machen, kann es, wenn es falsch verwendet wird, mehr Schaden als Nutzen anrichten.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} aufgebaut, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung zu verleihen. In diesem Beispiel informiert das [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Attribut den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) geben die Minimal- und Maximalwerte für den Fortschrittsbalken an und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) beschreibt den aktuellen Zustand, der daher mit JavaScript aktualisiert werden muss.

Neben dem direkten Platzieren im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

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

Alle Inhalte, die für Benutzer ohne unterstützende Technologien verfügbar sind, müssen auch für unterstützende Technologien verfügbar gemacht werden. Ebenso sollten keine Funktionen enthalten sein, die sich ausschließlich an Benutzer von unterstützender Technologie richten, die nicht auch für Personen ohne diese Technologien zugänglich sind. Der obige Fortschrittsbalken muss gestylt werden, um wie ein Fortschrittsbalken auszusehen.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zugelassen; sein Minimalwert ist immer `0`.

> [!NOTE]
> HTML-Landmark-Elemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) haben eingebaute implizite ARIA-Rollen, daher ist es nicht erforderlich, sie zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es verschiedene Unterstützungsgrade für ARIA. Die Unterstützung basiert auf dem verwendeten Betriebssystem und Browser sowie der Art der unterstützenden Technologie, die damit interagiert. Zusätzlich sind die Version des Betriebssystems, Browsers und der unterstützenden Technologie beitragende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder berichten fehlerhaft über deren Funktionalität.

Es ist auch wichtig anzuerkennen, dass einige Personen, die auf unterstützende Technologie angewiesen sind, ungern ihre Software aktualisieren, aus Angst, die Fähigkeit zur Interaktion mit ihrem Computer und Browser zu verlieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML), wann immer es möglich ist, da semantisches HTML eine weitaus bessere Unterstützung für unterstützende Technologien bietet.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlicher unterstützender Technologie zu testen. Der Grund dafür ist, dass Browser-Emulatoren und Simulatoren nicht wirklich effektiv sind, um vollständige Unterstützung zu testen. Ebenso sind Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenz

Die [ARIA-Referenz](/de/docs/Web/Accessibility/ARIA/Reference) ist eine umfassende Liste von ARIA-Attributen und -Rollen, die auf MDN dokumentiert sind.

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die nativ nicht in HTML existieren oder solche, die existieren, aber noch keine breite Browserunterstützung haben.
- [ARIA-Zustände und Eigenschaften (Attribute)](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : ARIA-Attribute ermöglichen das Ändern von Zuständen und Eigenschaften eines Elements, wie im Zugänglichkeitsbaum definiert.

## Leitfäden

Die [ARIA-Leitfäden](/de/docs/Web/Accessibility/ARIA/Guides) und [Anleitung-Seiten](/de/docs/Web/Accessibility/ARIA/How_to) sind Ressourcen, die Ihnen helfen, die Zugänglichkeit von Webseitenfunktionen wie Tabellen, Formularen und Tastaturnavigation zu verbessern.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorenpraktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente, wie man häufige Widgets und Interaktionen am besten ARIA-fähig macht. Eine ausgezeichnete Ressource.

## ARIA für geskriptete Widgets

- [Schreiben von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. verfügen über eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA "fälschen", müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
  - : Live-Bereiche bieten Bildschirmlesern Vorschläge, wie Änderungen an den Inhalten einer Seite behandelt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, um ARIA zu verstehen:

[ARIA, Accessibility APIs und Codieren, als ob es Ihnen wichtig wäre! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
