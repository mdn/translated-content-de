---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Mit dem weit verbreiteten Zugriff auf das Web über mobile Geräte und renommierten Plattformen wie iOS und Android, die umfassende Barrierefreiheitswerkzeuge bereitstellen, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel befasst sich mit speziellen Überlegungen zur Barrierefreiheit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und bewährten Praktiken der Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis der Barrierefreiheitsprobleme bei bestimmten Arten von Ereignissen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Kennen, dass mobile Browser spezifische Vorteile bei der Benutzerfreundlichkeit für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist auf modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte komplett andere Webtechnologien als Desktop-Browser nutzten und Entwickler dazu zwangen, Browser-Sniffing zu verwenden und ihnen komplett separate Websites zu liefern, sind lange vorbei (obwohl einige Unternehmen immer noch den Einsatz mobiler Geräte erkennen und eine separate mobile Domain bereitstellen).

Heutzutage können mobile Geräte in der Regel voll ausgestattete Websites abwickeln, und die Hauptplattformen haben sogar Screenreader integriert, um sehbehinderten Nutzern eine erfolgreiche Nutzung zu ermöglichen. Moderne mobile Browser haben auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf Mobilgeräten zugänglich und nutzbar zu machen, müssen Sie nur allgemeine gute Webdesign- und Barrierefreiheitspraktiken befolgen.

Es gibt einige Ausnahmen, die einer speziellen Berücksichtigung für Mobilgeräte bedürfen; die wichtigsten sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Steuerelemente der Benutzeroberfläche wie Schaltflächen sowohl auf Mobilgeräten (d.h. hauptsächlich Touchscreens) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingabe — Stellen Sie sicher, dass die Anforderungen an die Benutzereingabe auf mobilen Geräten so einfach wie möglich sind (z. B. in Formularen die Eingabe auf ein Minimum beschränken).
- Responsives Design — Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, Bilddownloadgrößen sparen und an die Bereitstellung von Bildern für hochauflösende Bildschirme denken.

## Zusammenfassung des Screenreader-Tests auf Android und iOS

Die häufigsten mobilen Plattformen haben voll funktionsfähige Screenreader. Diese funktionieren größtenteils wie Desktop-Screenreader, werden jedoch hauptsächlich mit Touchgesten anstelle von Tastenkombinationen bedient.

Schauen wir uns die beiden Hauptscreenreader an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist im Android-Betriebssystem integriert.

Um ihn zu aktivieren, schauen Sie nach, welches Telefonmodell und welche Android-Version Sie haben, und suchen Sie dann, wo sich das TalkBack-Menü befindet. Es variiert häufig zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben TalkBack in neueren Telefonen nicht einmal mehr integriert und stattdessen auf ihren eigenen Screenreader gesetzt.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schiebeschalter, um TalkBack zu aktivieren. Befolgen Sie alle weiteren Bildschirmaufforderungen, die Ihnen angezeigt werden.

Bei aktiviertem TalkBack sind die grundlegenden Steuerungen Ihres Android-Geräts etwas anders:

1. Durch einfaches Antippen einer App wird sie ausgewählt und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts wechseln Sie zwischen Apps oder Buttons/Steuerelementen, wenn Sie sich in einer Steuerelementleiste befinden. Das Gerät liest jede Option vor.
3. Durch doppeltes Tippen überall wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, und Ihr Gerät wird die verschiedenen Apps/Elemente vorlesen, über die Sie hinwegfahren.

Um TalkBack auszuschalten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (mithilfe der derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schiebeschalter und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie mit einer gleichmäßigen Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Eine vollständige Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack aktiviert ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Bildschirmrand nach oben wischen. Wenn Sie einen Code oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie anschließend zum entsprechenden Eingabebildschirm weitergeleitet.

Sie können auch durch Berührung erkunden, um die _Entsperren_ Schaltfläche am unteren Rand des Bildschirms zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht den Zugriff auf globale und lokale Kontextmenüs, wo immer Sie sich auf dem Gerät befinden. Erstere bieten globale Optionen in Bezug auf das Gerät als Ganzes, letztere bieten Optionen in Bezug auf die aktuelle App/den aktuellen Bildschirm, auf dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen Optionen unter den globalen und lokalen Kontextmenüs sehen Sie sich [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066) an.

#### Webseiten durchsuchen

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur mit den Überschriften, Formularsteuerelementen oder Links navigieren können oder Zeile für Zeile navigieren können usw.

Mit aktiviertem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erhalten, und lassen Sie Ihren Finger los, um es zu schreiben. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie mit einer gleichmäßigen Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um in den Standardmodus zurückzukehren, rufen Sie erneut das lokale Kontextmenü auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um diesen Aktivierungsvorgang zu bestätigen.

> [!NOTE]
> Siehe [Erste Schritte mit TalkBack auf Android](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um sie zu aktivieren, gehen Sie zur _Einstellungen_ App und wählen Sie _Barrierefreiheit > VoiceOver_. Drücken Sie den _VoiceOver_ Schieberegler, um ihn zu aktivieren (Sie sehen auf dieser Seite auch mehrere andere Optionen in Bezug auf VoiceOver).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Barrierefreiheit_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einfaches Antippen führt dazu, dass das von Ihnen angetippte Element ausgewählt wird. Ihr Gerät spricht das Element, das Sie angetippt haben.
2. Sie können die Elemente auf dem Bildschirm auch durch Wischen nach links und rechts navigieren, um zwischen ihnen zu wechseln, oder Ihren Finger auf dem Bildschirm hin- und herziehen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger abheben, um es auszuwählen).
3. Um das ausgewählte Element (z. B. eine ausgewählte App zu öffnen) zu aktivieren, doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion auszuführen — beispielsweise ein Foto aufnehmen, während Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Barrierefreiheit > VoiceOver_ mithilfe der oben beschriebenen Gesten und schalten den _VoiceOver_ Schieberegler wieder auf aus.

#### Telefon entsperren

Zum Entsperren des Telefons müssen Sie die Home-Taste drücken (oder wischen), wie gewohnt. Wenn Sie einen Code festgelegt haben, können Sie die einzelnen Zahlen durch Wischen/Schieben auswählen (wie oben beschrieben) und dann doppelt tippen, um jede Zahl einzugeben, wenn Sie die richtige gefunden haben.

#### Verwenden des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus einer Reihe von häufig nützlichen Optionen wählen können. So verwenden Sie ihn:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie ein Zifferblatt drehen. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können hin- und hergehen, um die Optionen durchzugehen.
2. Sobald Sie die gewünschte Option gefunden haben:
   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie ändern können (z. B. Lautstärke oder Lesegeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextabhängig — sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Probieren wir das Surfen im Web mit VoiceOver:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Für jedes Zeichen halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element durch Doppeltippen auswählen (z. B. einem Link folgen).
5. Standardmäßig ist die ausgewählte Rotoroption die Sprechgeschwindigkeit; Sie können momentan nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger wie ein Zifferblatt auf dem Bildschirm, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele der verfügbaren Optionen:
   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen Formularsteuerelementen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständige Referenz zu den verfügbaren VoiceOver-Gesten und weiteren Hinweisen zum Barrierefreiheitstest auf iOS siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel zu CSS und JavaScript Zugänglichkeit haben wir das Konzept von Ereignissen besprochen, die spezifisch für eine bestimmte Art von Steuerungsmechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Um dies zusammenzufassen, verursachen diese Barrierefreiheitsprobleme, da andere Steuerungsmechanismen die zugehörige Funktionalität nicht aktivieren können.

Beispielsweise ist das [click](/de/docs/Web/API/Element/click_event) Ereignis im Hinblick auf Barrierefreiheit gut — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf das der Handler festgelegt ist, durch Tab-Vorgänge und Drücken von Enter/Return oder durch Tippen auf einem Touchscreen-Gerät aktiviert werden. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Im Gegensatz dazu schaffen Maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht mit nicht-Maus-Steuerelementen aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([Beispiel live ansehen](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit Tastatur oder Touch zu steuern, werden Sie das Problem sehen. Dies passiert, weil wir Code verwenden wie den folgenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie andere, aber gleichwertige Ereignisse verwenden — beispielsweise funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Touch-Ereignisse zusammen verwendet werden — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie das Beispiel auch live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, die zeigen, wie man verschiedene Steuerungsmechanismen implementiert unter [Implementierung von Steuerungsmechanismen für Spiele](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch so zu ändern, dass sie je nach Faktoren wie Bildschirmgröße und Auflösung nutzbar und zugänglich für Benutzer verschiedener Gerätetypen sind.

Insbesondere die häufigsten Probleme, die für Mobilgeräte angesprochen werden müssen, sind:

- Eignung von Layouts für Mobilgeräte. Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können gelöst werden, indem ein responsives Layout unter Verwendung von Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) erstellt wird.
- Erhaltung von Bildgrößen beim Herunterladen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Gegenstücke und sind eher auf langsamen Netzwerkverbindungen unterwegs. Daher ist es ratsam, kleinere Bilder für Geräte mit schmalem Bildschirm bereitzustellen. Sie können dies mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Überlegungen zu hohen Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit die Anzeige weiterhin scharf und klar aussieht. Auch hier können Sie Bilder mit Techniken für responsive Bilder entsprechend bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorbildformat erfüllt werden, das heute gut über die Browser hinweg unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der Größe, in der es angezeigt wird (siehe [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für mehr Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Techniken für responsives Design führen, da diese an anderen Stellen auf MDN behandelt werden (siehe obige Links).

### Spezifische mobile Überlegungen

Es gibt andere wichtige Probleme zu berücksichtigen, wenn Sie Websites auf mobilen Geräten zugänglicher machen. Wir haben hier einige aufgelistet, aber wir werden weitere hinzufügen, wenn wir sie finden.

#### Zoom nicht deaktivieren

Mit dem [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass das Ändern der Größe aktiviert ist und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn es nicht unbedingt nötig ist — viele Menschen sind darauf angewiesen, um den Inhalt Ihrer Website überhaupt lesen zu können, und diese Funktionalität wegzunehmen ist eine wirklich schlechte Idee. Es gibt bestimmte Situationen, in denen Zoomen die Benutzeroberfläche beschädigen könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, sollten Sie eine andere Art von gleichwertiger Funktionalität bereitstellen, wie z. B. eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr verbreitet, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol oben auf dem Display zu reduzieren — das nur bei Bedarf gedrückt werden kann, um das Menü anzuzeigen — wenn die Website auf mobilen Geräten angesehen wird. Dies wird häufig durch ein "drei horizontale Linien" Symbol dargestellt, und das Designmuster ist folglich als "Hamburger-Menü" bekannt.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung, um es anzuzeigen, durch entsprechende Steuerungsmechanismen (normalerweise Touch für Mobilgeräte) zugänglich ist, wie im Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) oben diskutiert, und dass der Rest der Seite während dem Zugriff auf das Menü aus dem Weg geräumt oder verborgen wird, um Verwirrung zu vermeiden.

Hier finden Sie ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist das Eingeben von Daten normalerweise umständlicher für Benutzer als das gleichwertige Erlebnis auf Desktop-Computern. Es ist bequemer, Text über eine Desktop- oder Laptop-Tastatur in Formulareingaben einzugeben als über eine Touchscreen-Virtuelle Tastatur oder eine winzige mobile physische Tastatur.

Aus diesem Grund ist es sinnvoll, den benötigten Textumfang zu minimieren. Beispielsweise, anstatt von Benutzern zu verlangen, jedes Mal ihre Berufsbezeichnung mit einer normalen Texteingabe einzugeben, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch zur Konsistenz der Dateneingabe beiträgt) und eine "Andere"-Option anbieten, die ein Textfeld anzeigt, um etwaige Ausreißer einzugeben. Sie können ein einfaches Beispiel dieser Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) sehen (siehe das [common jobs Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es ist auch sinnvoll, den Einsatz von HTML-Formular-Eingabetypen wie das Datum auf mobilen Plattformen zu bedenken, da sie gut damit umgehen — sowohl Android als auch iOS zeigen nutzbare Widgets, die gut zur Geräteerfahrung passen. Siehe [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (sehen Sie sich die [HTML5 Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html) an) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Beispielsweise:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern.
- Die Typen `time` und `date` zeigen geeignete Picker zum Auswählen von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, können Sie immer verschiedene Markups an Ihre mobilen Geräte mithilfe der Funktionserkennung liefern. Schauen Sie sich unseren [Artikel zur Funktionserkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für mehr Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen, speziell auf mobile Geräte bezogenen Barrierefreiheitsproblemen und deren Überwindung geliefert. Wir haben Ihnen auch die Verwendung der häufigsten Screenreader erklärt, um Sie bei der Barrierefreiheitsprüfung zu unterstützen.

## Siehe auch

- [Richtlinien für die mobile Webentwicklung](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign abdecken.
- [Machen Sie Ihre Website auf Touch-Geräten funktionsfähig](https://www.creativebloq.com/javascript/make-your-site-korrekt-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um auf mobilen Geräten Interaktionen zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
