---
title: "ARIA: Rolle `application`"
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Rolle `application` signalisiert unterstützenden Technologien, dass ein Element _und alle seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollten und keine traditionellen HTML-Interpretationstechniken angewendet werden sollten. Diese Rolle sollte nur verwendet werden, um sehr dynamische und desktop-ähnliche Webanwendungen zu definieren. Die meisten mobilen und Desktop-Webanwendungen werden _nicht_ als Anwendungen für diesen Zweck angesehen.

```html
<div role="application" aria-label="…">…</div>
```

Durch die Angabe der Rolle `application` wird angezeigt, dass dieses `div`-Element und alle seine Nachkommen so behandelt werden sollen, als wären sie Teil einer Desktop-Anwendung.

## Beschreibung

Die `application` [Dokumenten-Strukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) signalisiert unterstützenden Technologien, dass dieser Teil der Webinhalte Elemente enthält, die nicht mit einem anderen bekannten HTML-Element oder WAI-ARIA-Widget übereinstimmen. Jegliche spezielle Interpretation von HTML-Strukturen und -Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig an den Browser und die Web-Anwendung übergeben werden, um Maus-, Tastatur- oder Touch-Interaktionen zu handhaben.

In diesem Modus ist der Web-Autor vollständig dafür verantwortlich, alle Tastatureingaben, das Fokus-Management und andere Interaktionen zu handhaben und kann nicht davon ausgehen, dass unterstützende Technologien auf ihrer Seite eine Verarbeitung durchführen.

Wenn die vom Anwendungsrolle umfasste Webanwendung Teile enthält, die _wie normale Webinhalte_ behandelt werden sollten, sollte eine Rolle wie [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) verwendet werden, um solche Inhalte zu enthalten.

### Hintergrund

Aus historischen Gründen, insbesondere unter Windows, haben Screenreader und einige andere unterstützende Technologien (AT) traditionell alle Webinhalte auf einmal aus dem Browser abgerufen, nachdem sie vollständig geladen wurden. Die ATs erstellen ihre eigene Darstellung davon, die für einen sehbehinderten Benutzer am sinnvollsten ist, um die Inhalte zu konsumieren. Oft wird dies als _virtuelles Dokument_, _Browse-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird auf eine einspaltige Ansicht optimiert. Ein Tastatur-Interaktionsmodell wird erstellt, das einem Textverarbeitungsprogramm sehr ähnlich ist, bei dem Benutzer Zeile für Zeile, Satz für Satz oder Absatz für Absatz lesen können. Die AT wird jegliche Semantik wie Links, Überschriften, Formularelemente, Tabellen, Listen oder Bilder lesen.

Darüber hinaus wurde im Laufe der Jahre eine Reihe sogenannter _Schnellnavigationstasten_ eingeführt, die es sehbehinderten Benutzern ermöglichen, eine Seite über einen bestimmten Elementtyp zu überfliegen. Solche Elemente umfassen in der Regel Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmarkenregionen.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verbrauchen sie selbst, ohne etwas an den Browser oder andere Benutzeragenten weiterzugeben. Um mit einer Webseite interagieren zu können, wird eine Standardsatz von Widgets erkannt, bei dem durch Drücken einer bestimmten Taste (normalerweise der <kbd>Enter</kbd>-Taste) dieser Modus ausgeschaltet wird. Der Screenreader-Modus, oft _Formularmodus_ oder _Fokusmodus_ genannt, lässt alle Tastatureingaben wieder an den Browser durch. <kbd>Escape</kbd> ist der häufigste Weg, um in den _Browse_-Modus zurückzukehren, aber innerhalb eines spezifischen `application`-Abschnitts können einige Screenreader andere Tasten erfordern, um diesen Modus absichtlich zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die Rolle `application` ist darauf ausgelegt, eine Möglichkeit zu bieten, Widgets zugänglich zu machen, die nicht Teil des Standardsatzes sind, um für direkte Interaktion in ATs zugänglich zu sein, die sowohl _Browse_- als auch _Fokus-Modi_ für die Interaktion mit Webinhalten verwenden. Die meisten gängigen Widgets haben erwartete Tastatur-Interaktionsverhalten. Aus diesem Grund würde eine individuelle Tastatur-Erfahrung, die von einem Web-Autor erstellt wird, eine verwirrende Erfahrung schaffen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung anzugeben, die als normale Webinhalte behandelt werden sollten.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das veröffentlicht wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Wird verwendet, um die idref eines Elements anzugeben, das zusätzliche Anweisungen für die Navigation oder Bedienung dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Wird verwendet, um der Anwendung einen ausführlicheren Text für Screenreader zu geben. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es festgelegt ist.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, ist das von diesem Element besessene oder kontrollierte Gruppierungselement erweitert, oder `false`, wenn es eingeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Gibt an, dass es ein Popup gibt, wie ein Menü oder Dialog, das durch das Element ausgelöst werden kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann mit dem spezifischen Widget verbunden sein, das implementiert wird. In einer Folienanwendung könnte zum Beispiel ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und mit akustischem Feedback über eine ARIA Live-Region die Position und den Überlappungsstatus mit anderen Objekten zu kommunizieren. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Leertaste</kbd> und <kbd>Eingabetaste</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung behandelt werden. Eine Ausnahme ist, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das die Tastaturnavigation des Browsers unterstützt, wie zum Beispiel ein [input](/de/docs/Web/HTML/Reference/Elements/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu behandeln und den Fokus zu steuern.
- Click, Touch
  - : Je nach Widget-Implementierung angemessen handhaben.
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungscontainers zu verwalten. Festgelegt als Reaktion auf Tastatur- oder andere Anwendungsereignisse, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die Rolle `application` hat kein verwandtes HTML-Widget und ist somit völlig frei gestaltbar. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass die Benutzer nicht in einer Fokussperre innerhalb eines Elements stecken bleiben, aus dem sie nicht herauskommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zu den regulären Webinhalten auf anderen Teilen der Seite, müssen gehandhabt werden. Verwenden Sie dies mit Bedacht und Vorsicht und denken Sie daran, zu testen!

## Beispiele

Einige bekannte Webanwendungen, die die Rolle `application` korrekt verwenden oder verwendet haben, sind:

- Google Docs, Sheets und Slides
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie sie auf dem Mozilla Developer Network verwendet werden
- Einige Teile von Gmail

## Barrierefreiheit

Eine unsachgemäße Verwendung der Rolle `application` kann unbeabsichtigt den Zugriff auf Informationen auf einer Webseite einschränken. Seien Sie daher sehr vorsichtig bei der Verwendung. Überlegen Sie sorgfältig, ob Sie diese tatsächlich benötigen und nicht einfach einen Satz anderer bekannter Widgets verwenden können, um die gleiche Aufgabe zu erfüllen.

Wenn verwendet, sollte die Rolle der Anwendung zum kleinstmöglichen gemeinsamen Container hinzugefügt werden, zum Beispiel nicht auf das `<body>`-Element. Vergewissern Sie sich auch, dass Sie das Geschriebene mit unterstützender Technologie testen, um zu überprüfen, ob es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Die Anwendung der Rolle `application` wird dazu führen, dass dieses und alle Nachkommenelemente dieses Elements wie Anwendungsinhalte und nicht wie Webinhalte behandelt werden. Jegliche Lese-Mechanismen, die unterstützende Technologien für Webinhalte haben können, werden nicht angewendet.

## Siehe auch

- [Wenn Sie die WAI-ARIA-Rolle `application` verwenden, tun Sie dies bitte mit Bedacht](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blogbeitrag von Marco Zehe
- [Verwendung der ARIA `application`-Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
