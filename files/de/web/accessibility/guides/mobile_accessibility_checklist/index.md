---
title: Checkliste für mobile Barrierefreiheit
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

Dieses Dokument bietet eine prägnante Checkliste mit Anforderungen zur Barrierefreiheit für Entwickler mobiler Apps. Es soll kontinuierlich weiterentwickelt werden, während sich weitere Muster ergeben.

## Farbe

- Der Farbkontrast muss den [WCAG 2.1 AA-Level-Anforderungen](https://www.w3.org/TR/WCAG/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links, etc.).

## Sichtbarkeit

- Techniken zum Verbergen von Inhalten, wie Null-Deckkraft, z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms, dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit eingesetzt werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Apps mit mehreren _Karten_):

  - Verwenden Sie das `hidden` Attribut oder `visibility` oder `display` Style-Properties.
  - Sofern nicht absolut unvermeidbar, sollte das Attribut `aria-hidden` nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardsteuerungen wie Links, Schaltflächen und Formularelemente sind standardmäßig fokussierbar.
  - Nicht standardisierte Steuerungen müssen eine geeignete [ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und auf konsistente Weise gehandhabt werden.

## Textäquivalente

- Für jedes nicht ausschließlich präsentative Nicht-Text-Element innerhalb der App muss ein Textäquivalent bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_ wo angebracht (lesen Sie Steve Faulkners Beitrag über [die Verwendung des HTML title Attributes](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die oben genannten Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text sollten vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Bild von Text) als Beschriftung müssen denselben Text im programmatischen [Name](https://www.w3.org/TR/WCAG21/#dfn-name) der Komponente haben. [WCAG 2.1: Label in name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen Labels ({{ htmlelement("label") }} Elemente) zum Vorteil der Screenreader-Benutzer haben.

## Zustandshandhabung

- Standardsteuerungen wie Optionsfelder und Kontrollkästchen werden durch das Betriebssystem gehandhabt. Für andere benutzerdefinierte Steuerungen müssen jedoch Zustandsänderungen über [ARIA Zustände](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Ausrichtung

- Inhalte sollten nicht auf eine einzige Ausrichtung, wie Hoch- oder Querformat, beschränkt sein, es sei denn, es ist essenziell. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Ausrichtung essenziell ist, sind eine Klavieranwendung oder ein Scheck.

## Allgemeine Richtlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht brechen

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA Landmark Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten verwendet werden, um die Struktur einer App oder eines Dokuments zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Touch-Events stellen Sie sicher, dass Folgendes gegeben ist ([WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Event sollte nicht verwendet werden, um einen Teil der Funktion auszuführen;
  - Wenn das Obige fehlschlägt, sollte die _Abschließung_ der Funktion beim Up-Event erfolgen, und ein Mechanismus sollte bereitstehen, um die Aktion vor ihrer Fertigstellung abzubrechen oder nach ihrer Fertigstellung rückgängig zu machen;
  - Wenn das Obige fehlschlägt, sollte das Up-Event fähig sein, eine Aktion rückgängig zu machen, die bei einem Down-Event ausgelöst wurde;
  - All das Obige darf verletzt werden, wenn es essenziell ist, die Aktion beim Down-Event auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu geben. Zum Beispiel Spielsteuerungen, Klaviertastaturen oder virtuelle Tastaturen.

- Touch-Ziele müssen groß genug sein, damit der Benutzer mit ihnen interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Touch-Zielen).

> [!NOTE]
> Die [ursprüngliche Version dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) verfasst.
