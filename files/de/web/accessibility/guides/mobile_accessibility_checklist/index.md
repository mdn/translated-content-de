---
title: Checkliste für mobile Zugänglichkeit
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieses Dokument bietet eine prägnante Checkliste der Barrierefreiheitsanforderungen für Entwickler von mobilen Apps. Es soll kontinuierlich weiterentwickelt werden, da mehr Muster entstehen.

## Farbe

- Der Farbkontrast muss den [WCAG 2.2 AA-Level-Anforderungen](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) entsprechen:
  - Kontrastverhältnis von 4.5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links, etc.).

## Sichtbarkeit

- Techniken zum Verbergen von Inhalten wie null Opazität, z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich für die Handhabung der Sichtbarkeit verwendet werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders wichtig für Einzelseiten-Apps mit mehreren _Karten_):
  - Verwenden Sie das `hidden`-Attribut oder die `visibility`- oder `display`-Stileigenschaften.
  - Sofern nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:
  - Standardkontrollen wie Links, Buttons und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-Standardkontrollen müssen eine geeignete [ARIA Role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und konsistent gehandhabt werden.

## Textersatz

- Für jedes nicht strikt präsentative nicht-textuelle Element innerhalb der App muss ein Textersatz bereitgestellt werden.
  - Verwenden Sie _alt_ und _title_, wo angemessen (lesen Sie Steve Faulkners Beitrag über [die Verwendung des HTML title-Attributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text sollten vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder einem Bild von Text) als Beschriftungen müssen denselben Text im programmatischen [Namen](https://w3c.github.io/wcag/guidelines/22/#dfn-name) der Komponente verfügbar haben. [WCAG 2.1: Bezeichnung im Namen.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen Labels ({{ htmlelement("label") }}-Elemente) haben, um Benutzer von Bildschirmlesegeräten zu unterstützen.

## Umgang mit Zuständen

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem verwaltet. Für andere benutzerdefinierte Steuerungen müssen Zustandsänderungen über [ARIA-Staaten](https://w3c.github.io/aria/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Orientierung

- Inhalte sollten nicht auf eine einzige Ausrichtung beschränkt sein, wie Hoch- oder Querformat, es sei denn, es ist wesentlich. [WCAG 2.1: Orientierung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
  - Beispiele für den zwingenden Einsatz einer Ausrichtung sind eine Klavieranwendung oder ein Bankscheck.

## Allgemeine Richtlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht unterbrechen

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten verwendet werden, um eine App- oder Dokumentstruktur zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Touch-Ereignisse stellen Sie sicher Folgendes ([WCAG 2.1: Zeigerabbruch](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):
  - Das Down-Event sollte nicht verwendet werden, um irgendeinen Teil der Funktion auszuführen;
  - Falls das obige nicht befolgt wird, sollte der _Abschluss_ der Funktion auf dem Up-Event erfolgen, und ein Mechanismus sollte verfügbar sein, um die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Falls das obige nicht befolgt wird, sollte das Up-Event in der Lage sein, jede Aktion rückgängig zu machen, die auf einem Down-Event ausgelöst wurde;
  - Alle oben genannten Punkte dürfen verletzt werden, wenn es wesentlich ist, die Aktion beim Down-Event auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu bieten. Zum Beispiel Spielsteuerungen, Klaviaturen oder virtuelle Tastaturen.

- Berührungsziele müssen groß genug sein, damit der Benutzer interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Leitlinien zur Größe von Berührungszielen).

> [!NOTE]
> Die [ursprüngliche Version dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) verfasst.
