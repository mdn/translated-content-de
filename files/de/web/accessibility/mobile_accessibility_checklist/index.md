---
title: Checkliste für mobile Barrierefreiheit
slug: Web/Accessibility/Mobile_accessibility_checklist
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieses Dokument bietet eine prägnante Checkliste der Barrierefreiheitsanforderungen für mobile App-Entwickler. Es soll sich kontinuierlich weiterentwickeln, wenn neue Muster entstehen.

## Farbe

- Der Farbkontrast muss den [WCAG 2.1 AA-Level-Anforderungen](https://www.w3.org/TR/WCAG/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links usw.).

## Sichtbarkeit

- Techniken zum Verbergen von Inhalten wie Null-Opazität, Z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles, was nicht zum aktuell sichtbaren Bildschirm gehört, muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Anwendungen mit mehreren _Karten_):

  - Verwenden Sie das `hidden`-Attribut oder die Stil-Eigenschaften `visibility` oder `display`.
  - Sofern nicht unbedingt unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardkontrollen wie Links, Schaltflächen und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-standardisierte Kontrollen müssen eine geeignete [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und konsistent behandelt werden.

## Textequivalente

- Für jedes nicht rein präsentative Nicht-Text-Element innerhalb der App muss ein Textequivalent bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_, wo dies angemessen ist (lesen Sie Steve Faulkners Beitrag über [die Verwendung des HTML-Titelattributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für ein gutes Tutorial).
  - Wenn die oben genannten Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und -Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def), wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text sollten vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Textbild) als Bezeichnung müssen denselben Text im programmatischen [Name](https://www.w3.org/TR/WCAG21/#dfn-name) der Komponente haben. [WCAG 2.1: Bezeichnung im Namen.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen Beschriftungen ({{ htmlelement("label") }} Elemente) zum Nutzen von Screenreader-Benutzern haben.

## Zustandsverwaltung

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem verwaltet. Für andere benutzerdefinierte Kontrollen müssen jedoch Zustandsänderungen über [ARIA-Zustände](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Ausrichtung

- Inhalte sollten nicht auf eine einzelne Ausrichtung beschränkt sein, wie Hoch- oder Querformat, es sei denn, es ist unverzichtbar. [WCAG 2.1: Ausrichtung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Ausrichtung unverzichtbar ist, sind eine Piano-Anwendung oder ein Bankscheck.

## Allgemeine Richtlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht brechen.

  ```html
  <h1>Oberste Überschrift</h1>
  <h2>Sekundäre Überschrift</h2>
  <h2>Eine weitere sekundäre Überschrift</h2>
  <h3>Niedrige Überschrift</h3>
  ```

- [ARIA-Landmark-Rollen](https://www.washington.edu/accesstech/websites/regions/) sollten verwendet werden, um die Struktur einer App oder eines Dokuments zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Touch-Events stellen Sie Folgendes sicher ([WCAG 2.1: Zeiger-Abbruch](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Event sollte nicht zur Ausführung eines Teils der Funktion genutzt werden;
  - Falls das Vorstehende fehlschlägt, sollte der _Abschluss_ der Funktion beim Up-Event eintreten, und ein Mechanismus sollte verfügbar sein, um die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Falls das Vorstehende fehlschlägt, sollte das Up-Event jede Aktion rückgängig machen können, die bei einem Down-Event ausgelöst wurde;
  - Alle obigen Punkte dürfen verletzt werden, wenn es unerlässlich ist, die Aktion beim Down-Event auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu geben. Beispielsweise Spielsteuerungen, Klaviertastaturen oder virtuelle Tastaturen.

- Berührungsziele müssen groß genug sein, damit der Benutzer sie bedienen kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Berührungszielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) geschrieben.
