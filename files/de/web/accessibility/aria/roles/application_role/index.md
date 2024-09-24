---
title: "ARIA: Rolle 'application'"
slug: Web/Accessibility/ARIA/Roles/application_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `application` signalisiert unterstützenden Technologien, dass ein Element _und alle seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollten und keine traditionellen HTML-Interpretationstechniken verwendet werden sollten. Diese Rolle sollte nur verwendet werden, um sehr dynamische und desktopähnliche Webanwendungen zu definieren. Die meisten mobilen und Desktop-Webanwendungen werden für diesen Zweck _nicht_ als Anwendungen betrachtet.

```html
<div role="application" aria-label="…">…</div>
```

Durch die Angabe der Rolle `application` wird angezeigt, dass dieses `div`-Element und all seine Nachkommen wie Teile einer Desktop-Anwendung behandelt werden sollen.

## Beschreibung

Die `application` [Dokumentenstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) zeigt unterstützenden Technologien an, dass dieser Teil des Webinhalts Elemente enthält, die nicht mit anderen bekannten HTML-Elementen oder WAI-ARIA-Widgets übereinstimmen. Jegliche spezielle Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig dem Browser und der Webanwendung überlassen werden, um Maus-, Tastatur- oder Touch-Interaktionen zu steuern.

In diesem Modus ist der Webautor vollständig dafür verantwortlich, jede Art von Tastatureingabe, Fokusverwaltung und andere Interaktionen zu handhaben und kann nicht davon ausgehen, dass unterstützende Technologien jegliche Verarbeitung auf ihrer Seite durchführen.

Wenn die von der Anwendungsrolle umfasste Webanwendung Teile enthält, die _wie normale Webinhalte_ behandelt werden sollen, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) verwendet werden, um solche Inhalte zu enthalten.

### Hintergrund

Aus historischen Gründen, insbesondere unter Windows, haben Bildschirmleser und einige andere unterstützende Technologien (AT) traditionell den gesamten Webinhalt auf einmal aus dem Browser erfasst, nachdem er geladen wurde. Die ATs erstellen ihre eigene Darstellung davon, die für einen sehbehinderten Benutzer am sinnvollsten ist, um den Inhalt zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Browse-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird auf eine einspaltige Ansicht vereinfacht. Ein Modell für Tastaturinteraktionen wird erstellt, das sehr einem Textverarbeitungsprogramm ähnelt, bei dem Benutzer zeilenweise, satzweise oder absatzweise lesen können. Die ATs lesen jegliche Semantik wie Links, Überschriften, Formularelemente, Tabellen, Listen oder Bilder.

Darüber hinaus wurde im Laufe der Jahre eine Reihe von sogenannten _Schnellnavigationstasten_ entwickelt, die es sehbehinderten Benutzern ermöglichen, eine Seite über einen bestimmten Elementtyp zu überfliegen. Solche Elemente umfassen normalerweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmarken.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verarbeiten sie selbst, ohne etwas an den Browser oder ein anderes Benutzeragenten weiterzuleiten. Um mit einer Webseite interagieren zu können, wird eine Standardreihe von Widgets erkannt, bei denen durch Drücken einer bestimmten Taste (normalerweise die <kbd>Enter</kbd>-Taste) dieser Modus ausgeschaltet wird. Der Bildschirmlese-Modus, oft als _Formularmodus_ oder _Fokusmodus_ bezeichnet, lässt wieder alle Tastatureingaben an den Browser weiterleiten. <kbd>Escape</kbd> ist der häufigste Weg, um in den _Browse_-Modus zurückzukehren, aber wenn man sich in einem bestimmten `application`-Abschnitt befindet, können einige Bildschirmleser andere Tasten erfordern, um diesen Modus gezielt zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die `application`-Rolle ist dafür gedacht, eine Möglichkeit zu bieten, Widgets, die nicht Teil des Standard-Sets sind, für die direkte Interaktion in ATs zugänglich zu machen, die sowohl _Browse_- als auch _Fokus_-Modi zur Interaktion mit Webinhalten verwenden. Die meisten gängigen Widgets haben erwartete Tastaturinteraktionsverhalten. Aufgrund dessen würde eine vom Webautor erstellte benutzerdefinierte Tastaturerfahrung ein verwirrendes Erlebnis schaffen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung zu kennzeichnen, die als normale Webinhalte behandelt werden sollten
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das angezeigt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Wird verwendet, um die idref eines Elements anzugeben, das zusätzliche Anweisungen zum Navigieren oder Bedienen dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Wird verwendet, um der Anwendung einen beschreibenderen Rollentext zu geben, der von Bildschirmlesern gesprochen wird. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es gesetzt ist
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, ist das Gruppenelement, das von diesem Element besessen oder kontrolliert wird, erweitert, oder `false`, wenn es zusammengeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt an, dass es ein Popup gibt, wie ein Menü oder Dialog, das durch das Element ausgelöst werden kann.

### Tastatur-Interaktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann alles sein, was mit dem bestimmten implementierten Widget verbunden ist. In einer Folienanwendung könnte beispielsweise ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und akustische Rückmeldungen über einen ARIA-Livebereich verwendet, um die Position und den Überlappungsstatus mit anderen Objekten zu kommunizieren. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Leertaste</kbd> und <kbd>Enter</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung gehandhabt werden. Die einzige Ausnahme ist, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das die Tastaturnavigation vom Browser unterstützt, zum Beispiel ein [input](/de/docs/Web/HTML/Element/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu behandeln und den Fokus zu steuern
- Klick, Berührung
  - : Behandeln Sie entsprechend für Ihr Widget auch
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungskontextes zu verwalten. Wird als Reaktion auf Tastatur- oder andere Anwendungsereignisse gesetzt, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die `application`-Rolle hat kein zugehöriges HTML-Widget und ist daher völlig frei formbar. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass Benutzer nicht in einer Fokussperre innerhalb von etwas stecken bleiben, das sie nicht verlassen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zu den regulären Webinhalten auf anderen Teilen der Seite, müssen behandelt werden. Verwenden Sie mit Bedacht und Vorsicht und denken Sie daran, zu testen!

## Beispiele

Einige prominente Webanwendungen, die die Anwendungsrolle korrekt verwenden oder verwendet haben, sind:

- Google Docs, Tabellen und Präsentationen
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie der auf dem Mozilla Developer Network verwendete
- Einige Teile von Gmail

## Barrierefreiheitsbedenken

Die unsachgemäße Verwendung der `application`-Rolle kann unbeabsichtigt den Zugriff auf Informationen auf einer Webseite entziehen. Seien Sie also sehr vorsichtig bei ihrer Verwendung. Überlegen Sie sorgfältig, ob Sie sie wirklich benötigen und nicht einfach eine Reihe anderer bekannter Widgets verwenden können, um die gleiche Aufgabe zu erledigen.

Wenn verwendet, sollte die Anwendungsrolle dem kleinstmöglichen gemeinsamen Container hinzugefügt werden, nicht z. B. dem `<body>`-Element. Stellen Sie außerdem sicher, dass das, was Sie geschrieben haben, mit unterstützender Technologie getestet wird, um zu bestätigen, dass es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangbestellung

Die Anwendung der `application`-Rolle führt dazu, dass dieses und alle Nachkommenelemente dieses Elements wie Anwendungsinhalt und nicht wie Webinhalt behandelt werden. Jegliche Lesemechanismen, die unterstützende Technologien für Webinhalte haben könnten, werden nicht angewendet.

## Siehe auch

- [Wenn Sie die WAI-ARIA-Rolle 'application' verwenden, tun Sie dies bitte mit Bedacht](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blogbeitrag von Marco Zehe
- [Die Verwendung der ARIA 'application'-Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
