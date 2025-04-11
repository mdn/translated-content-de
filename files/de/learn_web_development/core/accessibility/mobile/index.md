---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web auf mobilen Geräten so populär ist und renommierte Plattformen wie iOS und Android vollwertige Barrierefreiheits-Tools bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel befasst sich mit mobil-spezifischen Barrierefreiheitsüberlegungen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in vorherigen Lektionen des Moduls gelehrten Best Practices zur Barrierefreiheit.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis für Barrierefreiheitsprobleme hinsichtlich einiger Ereignisse.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf Mobilgeräten.</li>
          <li>Kennenlernen der Vorteile, die mobile Browser für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Der Stand der Barrierefreiheit – und der Unterstützung von Webstandards im Allgemeinen – ist auf modernen Mobilgeräten gut. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser verwendeten, sind lange vorbei, was Entwickler dazu zwang, Browser zu erkennen und ihnen komplett separate Websites zu liefern (obwohl einige Unternehmen nach wie vor die Nutzung von Mobilgeräten erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können Mobilgeräte im Allgemeinen voll funktionsfähige Websites verarbeiten, und die Hauptplattformen haben sogar Screenreader integriert, damit sehbehinderte Nutzer sie erfolgreich verwenden können. Moderne mobile Browser haben auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf Mobilgeräten barrierefrei und benutzerfreundlich zu gestalten, müssen Sie lediglich allgemeine gute Webdesign- und Barrierefreiheits-Best-Practices befolgen.

Es gibt einige Ausnahmen, die speziell für Mobilgeräte berücksichtigt werden müssen; die Hauptpunkte sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Bedienelemente wie Schaltflächen auf mobilen Geräten (d.h. hauptsächlich Touchscreen) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie die Anforderungen an Benutzereingaben auf mobilen Geräten so angenehm wie möglich (z. B. in Formularen das Tippen auf ein Minimum reduzieren).
- Responsives Design — Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, Bild-Downloadgrößen beibehalten und die Bereitstellung von Bildern für hochauflösende Bildschirme berücksichtigen.

## Zusammenfassung der Screenreader-Tests auf Android und iOS

Die gängigsten Mobilplattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, werden jedoch größtenteils mit Touch-Gesten statt mit Tastenkombinationen bedient.

Schauen wir uns die beiden wichtigsten an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, suchen Sie das Modell und die Android-Version Ihres Telefons und dann das TalkBack-Menü. Dies variiert stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben in neueren Telefonen sogar kein TalkBack mehr, sondern stattdessen ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack zu aktivieren. Folgen Sie allen weiteren Anweisungen auf dem Bildschirm, die Ihnen angezeigt werden.

Wenn TalkBack aktiviert ist, sind die grundlegenden Steuerungen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Einmaliges Antippen einer App wählt sie aus, und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts bewegen Sie sich zwischen Apps oder Buttons/Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Doppeltippen an einer beliebigen Stelle öffnet die App/wählt die Option aus.
4. Sie können auch „nach Berührung erkunden“ – halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn umher, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie fahren.

Wenn Sie TalkBack deaktivieren möchten:

1. Navigieren Sie zurück zur TalkBack-Menüseite (mithilfe der derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn zu deaktivieren.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie mit zwei Fingern nach links und rechts wischen, um zwischen ihnen zu wechseln.

Für eine vollständige Liste der TalkBack-Gesten siehe [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack aktiviert ist, funktioniert das Entsperren des Telefons etwas anders.

Sie können vom unteren Rand des Sperrbildschirms aus mit zwei Fingern nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm, um es einzugeben.

Sie können auch nach Berührung erkunden, um die _Entsperren_-Taste in der unteren Mitte des Bildschirms zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie auf globale und lokale Kontextmenüs zugreifen, unabhängig davon, wohin Sie auf dem Gerät navigiert haben. Erstere bieten globale Optionen, die sich auf das gesamte Gerät beziehen, und letztere bieten Optionen, die sich nur auf die aktuelle App/bildschirm beziehen, in der Sie sich befinden.

Um auf diese Menüs zuzugreifen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die Option, die Sie möchten, ausgewählt haben, doppelt tippen, um diese Option auszuwählen.

Für Details zu allen verfügbaren Optionen unter den globalen und lokalen Kontextmenüs siehe [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü im Webbrowser verwenden, um Optionen zu finden, um Webseiten nur anhand der Überschriften, Formularsteuerelemente oder Links zu navigieren oder Zeile für Zeile zu navigieren etc.

Zum Beispiel, wenn TalkBack eingeschaltet ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Menge Überschriften enthält, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie zu ihr gelangen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Sobald Sie fertig sind, finden Sie die Enter-Taste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer flüssigen Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarks" finden.
7. Doppelt tippen, um sie auszuwählen. Nun können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarks zu wechseln.
8. Um zum Standardmodus zurückzukehren, betreten Sie das lokale Kontextmenü erneut, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und dann doppelt tippen, um es zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständige Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es zu aktivieren, gehen Sie zu Ihrer _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie auf den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auch mehrere andere Optionen im Zusammenhang mit VoiceOver auf dieser Seite).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen App_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einzelnes Tippen lässt das Element, auf das Sie tippen, auswählen; Ihr Gerät spricht das Element aus, auf das Sie getippt haben.
2. Sie können die Elemente auf dem Bildschirm auch navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger um den Bildschirm schieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppelt tippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextabhängige Aktion auszuführen – beispielsweise ein Foto in der Kamera-App aufzunehmen.

Um es wieder auszuschalten, navigieren Sie mit den oben beschriebenen Gesten zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer auswählen, indem Sie wischen/schieben (wie oben erklärt) und dann doppelt tippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Den Rotor benutzen

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus einer Reihe von häufig nützlichen Optionen wählen können. Um es zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm, als ob Sie ein Zifferblatt drehen würden. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können hin und her gehen, um zwischen den Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie iterieren können (z. B. Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die unter dem Rotor verfügbaren Optionen sind kontextsensitiv – sie unterscheiden sich je nachdem, in welcher App oder Anzeige Sie sich befinden (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Versuchen wir das Surfen im Internet mit VoiceOver:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Menge Überschriften enthält, z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppelt tippen, um es einzugeben.
   - Sobald Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppelt tippen, um es auszuwählen (z. B. einem Link folgen).
5. Standardmäßig ist die ausgewählte Rotoroption die Sprechgeschwindigkeit; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger um den Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Speaking Rate_: Ändern Sie die Sprechgeschwindigkeit.
   - _Containers_: Zwischen verschiedenen semantischen Containern auf der Seite wechseln.
   - _Headings_: Zwischen Überschriften auf der Seite bewegen.
   - _Links_: Zwischen Links auf der Seite bewegen.
   - _Form Controls_: Zwischen Formularsteuerelementen auf der Seite bewegen.
   - _Language_: Zwischen verschiedenen Übersetzungen wechseln, wenn sie verfügbar sind.

7. Wählen Sie _Headings_. Jetzt können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständige Referenz zu den verfügbaren VoiceOver-Gesten und anderen Tipps zum Barrierefreiheits-Testing auf iOS siehe [Apple's VoiceOver documentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über CSS und JavaScript Barrierefreiheit haben wir das Konzept von Ereignissen besprochen, die spezifisch für einen bestimmten Steuerungsmechanismus sind (siehe [Mouse-specific events](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung: Diese verursachen Barrierefreiheitsprobleme, weil andere Steuerungsmechanismen die zugeordnete Funktion nicht aktivieren können.

Zum Beispiel ist das [click](/de/docs/Web/API/Element/click_event) Ereignis in Bezug auf die Barrierefreiheit gut – ein zugeordnetes Ereignishandling kann aktiviert werden, indem man auf das Element klickt, auf dem das Handling gesetzt ist, zu ihm tabbt und Enter/Return drückt oder auf einem Touchscreen-Gerät darauf tippt. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ erzeugen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme – ihre Ereignishandler können nicht mit nicht-maus Steuerungen aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([siehe Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder Berührung zu steuern, werden Sie das Problem bemerken. Dies tritt auf, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Formen der Steuerung zu ermöglichen, müssen Sie unterschiedliche, aber gleichwertige Ereignisse verwenden – zum Beispiel funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Touchevents zusammen verwendet werden – siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> [!NOTE]
> Sie können auch vollständig funktionsfähige Beispiele sehen, wie verschiedene Steuerungsmechanismen implementiert werden, unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und Auflösung, damit sie für Nutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Besonders die häufigsten Probleme, die für mobile Geräte angegangen werden müssen, sind:

- Eignung von Layouts für Mobilgeräte. Ein Mehrspaltenlayout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können gelöst werden, indem ein responsives Layout mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) erstellt wird.
- Konservierung der Bildgrößen beim Herunterladen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Pendants, und sie sind eher langsamen Netzwerkverbindungen ausgesetzt. Daher ist es klug, kleineren Geräten Bilder in kleineren Größen zu servieren. Sie können dies mit [responsiven Bildtechniken](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Nachdenken über hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit das Display scharf und klar bleibt. Auch hier können Sie Bilder mit responsiven Bildtechniken so bedienen, dass sie passend geliefert werden. Zudem können viele Bildanforderungen über das SVG-Vektorbildformat erfüllt werden, das heute über alle Browser hinweg gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der benötigten Anzeigengröße (siehe [Including vector graphics in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für mehr Details).

> [!NOTE]
> Wir bieten hier keine vollständige Diskussion der responsiven Designtechniken an, da sie an anderen Stellen auf MDN behandelt werden (siehe die obenstehenden Links).

### Spezifische Überlegungen für mobile Geräte

Es gibt weitere wichtige Aspekte, die bei der Barrierefreiheit auf mobilen Seiten berücksichtigt werden sollten. Wir haben ein paar hier aufgelistet, aber wir werden weitere hinzufügen, wenn sie uns einfallen.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass das Ändern der Größe aktiviert ist, und setzen Sie die Breite auf die Gerätebreite im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn dies irgendwie möglich ist – viele Menschen sind auf Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können, und es ist eine sehr schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche stören kann; in solchen Fällen, wenn Sie das Gefühl haben, den Zoom deaktivieren zu müssen, sollten Sie eine andere Art von Äquivalent bereitstellen, wie eine Steuerung zum Vergrößern der Textgröße, die das Layout nicht stört.

#### Menüs zugänglich halten

Da der Bildschirm bei mobilen Geräten viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol am oberen Bildschirmrand zu reduzieren – das nur bei Bedarf gedrückt werden kann, um das Menü anzuzeigen – wenn die Seite auf mobilen Geräten angezeigt wird. Dies wird allgemein durch ein "drei horizontale Linien" Symbol dargestellt, und das Designmuster ist daher als "Hamburger-Menü" bekannt.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass die Steuerung zum Anzeigen des Menüs über geeignete Steuerungsmechanismen (normalerweise Touch für Mobilgeräte) zugänglich ist, wie oben in [Steuerungsmechanismen](#steuerungsmechanismen) beschrieben, und dass der Rest der Seite verschoben oder auf irgendeine Weise versteckt wird, während auf das Menü zugegriffen wird, um Verwirrung bei der Navigation zu vermeiden.

Hier ist ein [gutes Hamburger-Menü Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf mobilen Geräten ist die Eingabe von Daten für Nutzer tendenziell lästiger als das entsprechende Erlebnis auf Desktop-Computern. Es ist bequemer, Text mit einer Desktop- oder Laptop-Tastatur in Formulareingabefelder einzugeben als mit einer virtuellen Touchscreen-Tastatur oder einer kleinen mobilen physischen Tastatur.

Aus diesem Grund lohnt es sich, die Menge an Tippen zu minimieren. Als Beispiel könnten Sie statt der Eingabe der Berufsbezeichnung eines Nutzers bei jeder Anmeldung ein {{htmlelement("select")}}-Menü anbieten, das die häufigsten Optionen enthält (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option bietet, die ein Textfeld anzeigt, um alle Ausnahmen einzugeben. Sie können ein einfaches Beispiel für diese Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (siehe das [common job Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)) sehen.

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen wie Datum auf mobilen Plattformen zu berücksichtigen, da diese gut mit ihnen umgehen – sowohl Android als auch iOS, z. B. zeigen nützliche Widgets an, die gut zur Geräteerfahrung passen. Siehe [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (sehen Sie die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) – versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern an.
- Typen `time` und `date` zeigen geeignete Picker zum Auswählen von Uhrzeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie immer auch anderen Markup an Ihre Mobilgeräte servern mithilfe von Feature-Erkennung. Schauen Sie sich unser [Feature Detection Artikel](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für mehr Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen mobil-spezifischen Barrierefreiheitsproblemen und wie sie zu überwinden sind, gegeben. Wir führten Sie auch durch die Verwendung der gebräuchlichsten Screenreader, um Ihnen beim Barrierefreiheits-Testen zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für mobile Webdesigns abdecken.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Events, um Interaktionen auf mobilen Geräten zum Funktionieren zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
