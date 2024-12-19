---
title: Mobile Zugänglichkeit
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Mit dem weit verbreiteten Zugang zu Webseiten über mobile Geräte und renommierten Plattformen wie iOS und Android, die vollwertige Zugänglichkeitstools bieten, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu beachten. Dieser Artikel befasst sich mit spezifischen Überlegungen zur Zugänglichkeit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den Zugänglichkeits-Grundlagen, wie sie in den vorherigen Lektionen des Moduls behandelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Bildschirmlesern auf iOS und Android.</li>
          <li>Verständnis der zugänglichkeitsbezogenen Probleme hinter einigen Ereignistypen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Kennen von spezifischen Nutzervorteilen mobiler Browser für spezielle <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zugänglichkeit auf mobilen Geräten

Der Stand der Zugänglichkeit — und die Unterstützung von Webstandards im Allgemeinen — ist bei modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte völlig unterschiedliche Webtechnologien verwendeten als Desktop-Browser und Entwickler dazu zwangen, Browser-Sniffing durchzuführen und ihnen komplett separate Seiten anzubieten, sind lange vorbei (obwohl immer noch einige Unternehmen die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können mobile Geräte in der Regel voll funktionsfähige Websites verarbeiten, und die Hauptplattformen haben sogar Bildschirmleser integriert, um sehbehinderten Nutzern die erfolgreiche Nutzung zu ermöglichen. Moderne mobile Browser haben in der Regel auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und benutzbar zu machen, müssen Sie lediglich allgemeine bewährte Webdesign- und Zugänglichkeitspraktiken befolgen.

Es gibt einige Ausnahmen, die besondere Überlegungen für mobile Geräte erfordern; die wichtigsten sind:

- Steuerungselemente — Stellen Sie sicher, dass Steuerelemente der Benutzeroberfläche, wie Schaltflächen, auf mobilen (d.h. hauptsächlich Touchscreen-) Geräten und auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingabe — Machen Sie die Eingabeanforderungen für Benutzer auf mobilen Geräten so schmerzlos wie möglich (z.B. in Formularen, minimieren Sie das Tippen).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, die Bildgrößen beim Herunterladen sparen und denken Sie über die Bereitstellung von Bildern für hochauflösende Bildschirme nach.

## Zusammenfassung des Bildschirmlesertests auf Android und iOS

Die gebräuchlichsten mobilen Plattformen haben voll funktionsfähige Bildschirmleser. Diese funktionieren weitgehend auf die gleiche Weise wie Desktop-Bildschirmleser, außer dass sie hauptsächlich mit Berührungsgesten und nicht mit Tastenkombinationen bedient werden.

Schauen wir uns die beiden wichtigsten an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Bildschirmleser ist im Android-Betriebssystem integriert.

Um es einzuschalten, suchen Sie das genaue Telefonmodell und die Android-Version, die Sie haben, und suchen Sie dann, wo sich das TalkBack-Menü befindet. Es neigt dazu, stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen zu variieren. Einige Telefonhersteller (z.B. Samsung) haben TalkBack in neueren Telefonen nicht enthalten und stattdessen auf ihre eigenen Bildschirmleser gesetzt.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack einzuschalten. Folgen Sie allen weiteren Bildschirmanweisungen, die Ihnen angezeigt werden.

Wenn TalkBack eingeschaltet ist, werden die Grundsteuerungen Ihres Android-Geräts etwas anders sein. Zum Beispiel:

1. Einmaliges Antippen einer App wird sie auswählen, und das Gerät liest vor, worum es sich bei der App handelt.
2. Wischen nach links und rechts wird zwischen Apps oder Schaltflächen/Steuerelementen wechseln, wenn Sie sich in einer Steuerungsleiste befinden. Das Gerät liest jede Option vor.
3. Doppeltippen überall öffnet die App/wählt die Option aus.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, die Sie überqueren.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (mit den aktuellen aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um TalkBack auszuschalten.

> [!NOTE]
> Sie können jederzeit durch Wischen nach oben und links in einer flüssigen Bewegung zum Startbildschirm gelangen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen mit zwei Fingern nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [Verwendung von TalkBack-Gesten](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons ein wenig anders.

Sie können mit zwei Fingern von unten nach oben über den Sperrbildschirm streichen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie dann zum relevanten Eingabebildschirm gebracht, um es einzugeben.

Sie können auch durch Berührung erkunden, um die _Entsperren_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

TalkBack ermöglicht es Ihnen, globale und lokale Kontextmenüs aufzurufen, wo immer Sie auf dem Gerät navigiert haben. Ersteres bietet globale Optionen in Bezug auf das Gerät als Ganzes, und letzteres bietet Optionen, die sich nur auf die aktuelle App/den Bildschirm beziehen, in dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die Option ausgewählt haben, die Sie möchten, doppeltippen Sie, um diese Option zu wählen.

Für Details zu allen Optionen, die im globalen und lokalen Kontextmenü verfügbar sind, siehe [Verwendung der globalen und lokalen Kontextmenüs](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, um Webseiten nur durch Überschriften, Formularsteuerelemente oder Links zu navigieren oder Zeile für Zeile zu navigieren usw.

Zum Beispiel, wenn TalkBack eingeschaltet ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften darauf hat, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts streichen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreichen, und lassen Sie dann Ihren Finger los, um es zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Sobald Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie nach oben und rechts in einer flüssigen Bewegung, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen, um sie auszuwählen. Nun können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um in den Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um zu aktivieren.

> [!NOTE]
> Weitere vollständige Dokumentation finden Sie unter [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zu Ihrer _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (auf dieser Seite sehen Sie auch mehrere andere Optionen im Zusammenhang mit VoiceOver).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, werden die Basisgesten von iOS ein wenig anders sein:

1. Ein Einzeltippen wird das Element, das Sie antippen, auswählen; Ihr Gerät wird das Element vorlesen, das Sie angetippt haben.
2. Sie können auch durch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts streichen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger auf dem Bildschirm herumgleiten, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element finden, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu blättern.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion auszuführen — beispielsweise ein Foto in der Kamera-App aufzunehmen.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den oben genannten Gesten und schalten Sie den _VoiceOver_Schieber zurück auf aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode festgelegt haben, können Sie jede Zahl durch Wischen/Gleiten (wie oben erläutert) auswählen und dann doppeltippen, um jede Zahl einzugeben, wenn Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver eingeschaltet ist, steht Ihnen ein Navigationsfeature namens Rotor zur Verfügung, mit dem Sie schnell aus einer Reihe nützlicher Optionen auswählen können. So verwenden Sie es:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie ein Zifferblatt drehen. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können vor- und zurückgehen, um durch die Optionen zu wechseln.
2. Wenn Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie ändern können (wie z.B. Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextspezifisch — sie variieren je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Lassen Sie uns mit VoiceOver das Surfen im Web ausprobieren:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften darauf hat, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts streichen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es zu tippen.
   - Sobald Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element doppeltippen, um es auszuwählen (z.B. einem Link zu folgen).
5. Standardmäßig wird die ausgewählte Rotoroption die Sprechgeschwindigkeit sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger um den Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Speaking Rate_: Ändern Sie die Sprechgeschwindigkeit.
   - _Containers_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Headings_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen den Links auf der Seite.
   - _Form Controls_: Wechseln Sie zwischen den Formularsteuerelementen auf der Seite.
   - _Language_: Wechseln Sie zwischen verschiedenen Übersetzungen, wenn sie verfügbar sind.

7. Wählen Sie _Headings_. Nun können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Referenz, die die VoiceOver-Gesten und andere Tipps zum Testen der Zugänglichkeit auf iOS behandelt, lesen Sie [Apple's VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über CSS und JavaScript Barrierefreiheit haben wir das Konzept von Ereignissen besprochen, die spezifisch für eine bestimmte Art von Steuermechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Diese verursachen Zugänglichkeitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Als Beispiel ist das [click](/de/docs/Web/API/Element/click_event) Ereignis in Bezug auf Zugänglichkeit gut — ein zugehöriger Ereignishandler kann ausgelöst werden, indem Sie auf das Element klicken, auf dem der Handler gesetzt ist, es fokussieren und die Eingabetaste/Return-Taste drücken oder es auf einem Touchscreen-Gerät antippen. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([sehen Sie es lebendig](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ erstellen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht mit nicht-maussteuerung aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) Beispiel mit einer Tastatur oder Berührung zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsarten zu ermöglichen, müssen Sie verschiedene, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfacheres Beispiel bereitgestellt, das zeigt, wie man Maus- und Berührungsereignisse zusammen nutzt — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, die zeigen, wie verschiedene Steuermechanismen implementiert werden bei [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps so zu gestalten, dass sie sich je nach Faktoren wie Bildschirmgröße und Auflösung dynamisch ändern, damit sie für Benutzer verschiedener Gerätetypen verwendbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte gelöst werden müssen, sind:

- Geeignetheit der Layouts für mobile Geräte. Ein Mehrspaltenlayout funktioniert beispielsweise nicht so gut auf einem schmalen Bildschirm und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Schonung der heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinen Bildschirmen keine so großen Bilder wie ihre Desktop-Äquivalente und sie sind eher mit langsamen Netzverbindungen verbunden. Daher ist es ratsam, kleineren zu en, wann immer es angebracht ist. Sie können dies mit [techniken für responsive Bilder](/de/docs/Web/HTML/Responsive_images) handhaben.
- Überlegungen zu hohen Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit das Display weiterhin klar und scharf aussieht. Erneut können Sie Bilder nach Bedarf mit Techniken für responsive Bilder bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorbildformat erfüllt werden, das heute von Browsern gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig davon, in welcher Größe es angezeigt wird (siehe [Including vector graphics in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Techniken des responsiven Designs bieten, da sie an anderen Stellen auf MDN behandelt werden (siehe die obenstehenden Links).

### Spezifische Überlegungen für mobile Geräte

Es gibt andere wichtige Aspekte, die berücksichtigt werden müssen, wenn Websites für mobile Geräte zugänglicher gemacht werden sollen. Wir haben hier einige aufgelistet, werden jedoch weitere hinzufügen, wenn wir an sie denken.

#### Zoom nicht deaktivieren

Mit dem [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) kann der Zoom deaktiviert werden. Stellen Sie immer sicher, dass das Resizing aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn es überhaupt möglich ist — viele Menschen sind auf das Zoomen angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. In bestimmten Situationen kann das Zoomen die Benutzeroberfläche beschädigen; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, sollten Sie eine andere Art von Äquivalent bereitstellen, wie z.B. eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol am oberen Bildschirmrand zu reduzieren — das nur dann gedrückt werden kann, um das Menü anzuzeigen, wenn es benötigt wird —, wenn die Site auf Mobilgeräten angezeigt wird. Dies wird gemeinhin durch ein Symbol mit "drei horizontalen Linien" repräsentiert, und das Designmuster ist deshalb als "Hamburger-Menü" bekannt.

Wenn ein solches Menü implementiert wird, müssen Sie sicherstellen, dass die Kontrolle, es anzuzeigen, durch geeignete Steuermechanismen (normalerweise Berührung für Mobilgeräte) zugänglich ist, wie im Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) oben diskutiert, und dass der Rest der Seite aus dem Weg geräumt oder auf irgendeine Weise verborgen wird, während auf das Menü zugegriffen wird, um Verwirrung beim Navigieren zu vermeiden.

Hier klicken für ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist die Eingabe von Daten oft mühsamer für Benutzer als das gleichwertige Erlebnis auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mit einer Desktop- oder Laptop-Tastatur als mit einer virtuellen Touchscreen-Tastatur oder einer winzigen physischen Mobiltelefon-Tastatur einzugeben.

Aus diesem Grund lohnt es sich, die Menge an benötigtem Tippen zu minimieren. Als Beispiel, anstatt Benutzer jedes Mal ihre Berufsbezeichnung mit einer regulären Texteingabe eingeben zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch zur Konsistenz bei der Dateneingabe beiträgt) und eine "Andere"-Option anbieten, die ein Texteingabefeld anzeigt, um jede Ausnahme einzugeben. Sie können ein einfaches Beispiel für diesen Ansatz in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (sehen Sie das [live-Beispiel zu gängigen Berufen](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)) sehen.

Es ist auch wertvoll, die Verwendung von HTML-Formulareingabetypen wie dem Datum auf mobilen Plattformen zu berücksichtigen, da diese sie gut behandeln — sowohl Android als auch iOS zeigen z.B. benutzerfreundliche Widgets, die gut zur Geräteerfahrung passen. Siehe [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (sehen Sie die [HTML5 Formulare Beispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswähler zum Auswählen von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie andere Markups für Ihre mobilen Geräte mithilfe der Erkennung von Funktionen bereitstellen. Siehe [Input-Typen](https://diveinto.html5doctor.com/detect.html#input-types) für grundlegende Informationen zur Erkennung unterschiedlicher Eingabetypen und sehen Sie sich auch unseren [Artikel zur Funktionserkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) an, um viel mehr Informationen zu erhalten.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Informationen über häufige, spezifische Fragen zur mobilen Zugänglichkeit und Möglichkeiten zu deren Überwindung bereitgestellt. Wir haben Sie auch durch den Gebrauch der gebräuchlichsten Bildschirmleser geführt, um Ihnen bei der Zugänglichkeitstestung zu helfen.

## Siehe auch

- [Richtlinien für die mobile Webentwicklung](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für mobiles Webdesign behandelt.
- [Lassen Sie Ihre Seite auf Touch-Geräten funktionieren](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf mobilen Geräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
