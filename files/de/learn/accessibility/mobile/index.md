---
title: Mobile Accessibility
slug: Learn/Accessibility/Mobile
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

Da der Zugriff auf das Web über mobile Geräte so beliebt ist und renommierte Plattformen wie iOS und Android über vollwertige Barrierefreiheits-Tools verfügen, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel untersucht spezifische Überlegungen zur Barrierefreiheit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorangegangenen Artikel in diesem Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Probleme bei der Barrierefreiheit auf mobilen Geräten existieren und wie man sie überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist bei modernen mobilen Geräten gut. Vorbei sind die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser-Sniffing zu nutzen und ihnen komplett separate Seiten zu servieren (obwohl immer noch einige Unternehmen die Nutzung von Mobilgeräten erkennen und ihnen eine separate mobile Domain bereitstellen).

Heutzutage können mobile Geräte in der Regel voll funktionsfähige Websites bewältigen, und die wichtigsten Plattformen haben sogar Screenreader integriert, die sehbehinderten Nutzern den erfolgreichen Einsatz ermöglichen. Moderne mobile Browser neigen auch dazu, eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu haben.

Um eine Website auf mobilen Geräten barrierefrei und benutzbar zu machen, müssen Sie lediglich allgemeine gute Webdesign- und Barrierefreiheit-Best-Practices befolgen.

Es gibt einige Ausnahmen, die besondere Berücksichtigung benötigen; die Hauptpunkte sind:

- Steuermechanismen — Stellen Sie sicher, dass Schnittstellensteuerungen wie Schaltflächen auf mobilen Geräten (d. h. hauptsächlich Touchscreen) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Nutzereingaben — Machen Sie die Nutzereingabeanforderungen auf mobilen Geräten so schmerzlos wie möglich (z. B. in Formularen das Tippen auf ein Minimum beschränken).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bildgrößen beim Download einsparen und bedenken Sie die Bereitstellung von Bildern für hochauflösende Bildschirme.

## Zusammenfassung des Screenreader-Tests unter Android und iOS

Die häufigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren weitgehend wie Screenreader auf Desktops, mit dem Unterschied, dass sie größtenteils mit Touch-Gesten statt mit Tastenkombinationen bedient werden.

Schauen wir uns die beiden Haupt-Screenreader an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, ermitteln Sie, welches Telefonmodell und welche Android-Version Sie haben, und suchen Sie dann nach dem TalkBack-Menü. Dieses unterscheidet sich stark zwischen verschiedenen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben bei neueren Telefonen nicht einmal mehr TalkBack, sondern sich stattdessen für ihren eigenen Screenreader entschieden.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie auf den Schiebeschalter, um TalkBack zu aktivieren. Folgen Sie jeglichen zusätzlichen Bildschirmaufforderungen, die Ihnen angezeigt werden.

Wenn TalkBack eingeschaltet ist, werden die grundlegenden Steuerungen Ihres Android-Geräts etwas anders sein. Zum Beispiel:

1. Ein einfaches Tippen auf eine App wird sie auswählen, und das Gerät wird Ihnen ansagen, was die App ist.
2. Durch Wischen nach links und rechts wechseln Sie zwischen Apps oder Schaltflächen/Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät wird Ihnen jede Option ansagen.
3. Ein Doppeltippen irgendwo öffnet die App/wählt die Option aus.
4. Sie können auch "durch Berühren erkunden" — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn herum, und Ihr Gerät wird Ihnen die verschiedenen Apps/Elemente ansagen, über die Sie sich bewegen.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (verwenden Sie die derzeit aktivierten unterschiedlichen Gesten).
2. Navigieren Sie zum Schiebeschalter und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons etwas anders.

Sie können vom unteren Rand des Sperrbildschirms mit zwei Fingern nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie dann zum entsprechenden Eingabebildschirm weitergeleitet, um es einzugeben.

Sie können auch durch Berühren erkunden, um die Schaltfläche _Entsperren_ am unteren Rand des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, egal wohin Sie auf dem Gerät navigiert sind. Ersteres bietet globale Optionen in Bezug auf das gesamte Gerät, während Letzteres Optionen bietet, die nur den aktuellen App/Bildschirm betreffen, auf dem Sie sich befinden.

Um auf diese Menüs zuzugreifen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen unter den globalen und lokalen Kontextmenüs verfügbaren Optionen siehe [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Sie können im Kontextmenü, während Sie sich in einem Webbrowser befinden, Optionen finden, um Webseiten nur über die Überschriften, Formularsteuerungen oder Links zu navigieren oder Zeile für Zeile zu navigieren usw.

Zum Beispiel, wenn TalkBack eingeschaltet ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften enthält, wie die Titelseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie den gewünschten Buchstaben erhalten, und lassen Sie dann Ihren Finger los, um ihn zu tippen. Wiederholen Sie dies für jeden Buchstaben.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie mit einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um zum Standardmodus zurückzukehren, geben Sie das lokale Kontextmenü erneut ein, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie, um es zu aktivieren.

> [!NOTE]
> Siehe [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=de&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zur App _Einstellungen_ und wählen _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schiebeschalter, um ihn zu aktivieren (Sie werden auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver sehen).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_.

Sobald VoiceOver aktiviert ist, werden sich die grundlegenden Steuerungs-Gesten von iOS etwas unterscheiden:

1. Durch einfaches Antippen wird das Element, auf das Sie getippt haben, ausgewählt; Ihr Gerät wird das Element, auf das Sie getippt haben, sprechen.
2. Sie können die Elemente auf dem Bildschirm auch durch Wischen nach links und rechts durchsuchen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger über den Bildschirm schieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger loslassen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie überall auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu blättern.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion auszuführen — zum Beispiel ein Foto zu machen, während Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ und schalten den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen), wie gewohnt. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben (wie oben erklärt) auswählen und dann doppeltippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Den Rotor verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, die es ermöglicht, schnell zwischen einer Reihe nützlicher Optionen zu wählen. Um den Rotor zu benutzen:

1. Drehen Sie zwei Finger auf dem Bildschirm, als ob Sie ein Ziffernblatt drehen. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können vor- und zurückgehen, um zwischen den Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert iterierbar ist (wie Lautstärke oder Sprechtempo), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextsensitiv — sie werden je nach App oder Ansicht, in der Sie sich befinden, unterschiedlich sein (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Versuchen wir, Webseiten mit VoiceOver zu durchsuchen:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften enthält, wie die Titelseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste durch Wischen nach links/rechts, bis Sie sie erreicht haben, und dann doppeltippen.
   - Halten Sie für jeden Buchstaben Ihren Finger auf der virtuellen Tastatur, um den gewünschten Buchstaben zu erhalten, und lassen Sie dann Ihren Finger los, um ihn auszuwählen. Doppeltippen Sie, um ihn einzugeben.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppeltippen, um es auszuwählen (z. B., um einem Link zu folgen).
5. Standardmäßig wird die gewählte Rotor-Option das Sprechtempo sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger auf dem Bildschirm wie ein Ziffernblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Sprechtempo_: Ändern des Sprechtempos.
   - _Container_: Wechseln zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln zwischen Überschriften auf der Seite.
   - _Links_: Wechseln zwischen Links auf der Seite.
   - _Formularsteuerungen_: Wechseln zwischen Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln zwischen verschiedenen Übersetzungen, falls verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine umfassendere Referenz über die verfügbaren VoiceOver-Gesten und weitere Hinweise zum Barrierefreiheit-Testen auf iOS, siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem Artikel über CSS und JavaScript zur Barrierefreiheit haben wir die Idee von Ereignissen erörtert, die spezifisch für einen bestimmten Steuermechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Diese verursachen Barrierefreiheitsprobleme, da andere Steuermechanismen die zugeordnete Funktionalität nicht aktivieren können.

Ein Beispiel: Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist in Bezug auf die Barrierefreiheit gut — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf das der Handler eingestellt ist, auf das Tabulator-Tippen und Drücken von Enter/Return oder Antippen auf einem Touchscreen-Gerät aufgerufen werden. Sehen Sie sich unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel an ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu verstehen, was wir meinen.

Alternativ verursachen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht über Steuerungen ohne Maus aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) Beispiel mit einer Tastatur oder Berührung zu steuern ([Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)), werden Sie das Problem sehen. Dies tritt auf, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsmöglichkeiten zu ermöglichen, müssen Sie unterschiedliche, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Berührungsereignisse zusammen verwendet werden können — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch vollständig funktionale Beispiele sehen, wie unterschiedliche Steuermechanismen implementiert werden, unter [Implementierung von Steuermechanismen für Spiele](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und Auflösung, sodass sie für Benutzer unterschiedlicher Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte angesprochen werden müssen, sind:

- Eignung der Layouts für mobile Geräte. Ein Layout mit mehreren Spalten funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut, und die Schriftgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelöst werden.
- Sparen bei den heruntergeladenen Bildgrößen. Im Allgemeinen benötigen kleine Bildschirmgeräte keine so großen Bilder wie ihre Desktop-Gegenstücke, und sie sind eher auf langsamen Netzwerkverbindungen. Daher ist es klug, kleinere Bilder für schmale Bildschirme bereitzustellen, wenn es angemessen ist. Sie können dies mit [responsiven Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) handhaben.
- Über das Nachdenken über hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit die Anzeige weiterhin scharf und klar bleibt. Auch hier können Sie Bilder entsprechend bereitstellen, indem Sie responsiven Bildtechniken verwenden. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorgrafikformat erfüllt werden, das heute in Browsern gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig davon, in welcher Größe es angezeigt wird (siehe [Hinzufügen von Vektorgrafiken zum Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) für mehr Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über responsive Designtechniken anbieten, da sie an anderen Stellen auf MDN behandelt werden (siehe die oben genannten Links).

### Spezifische mobile Überlegungen

Es gibt weitere wichtige Themen, die beim Erstellen von barrierefreien Websites für mobile Geräte berücksichtigt werden müssen. Wir haben hier einige aufgeführt, werden jedoch weitere hinzufügen, wenn wir an sie denken.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass das Vergrößern aktiviert ist und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn es möglich ist — viele Menschen sind auf die Möglichkeit angewiesen, zoomen zu können, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen möglicherweise die Benutzeroberfläche stört; in solchen Fällen sollten Sie, wenn Sie das Zoomen deaktivieren müssen, eine andere Art von Äquivalent bereitstellen, wie zum Beispiel ein Steuerungselement zur Vergrößerung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht stört.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol am oberen Rand der Anzeige schrumpfen zu lassen — das nur bei Bedarf zum Zugriff auf das Menü gedrückt werden kann — wenn die Website auf dem Handy angesehen wird. Dies wird häufig durch ein "drei horizontale Linien"-Symbol dargestellt, und das Designmuster ist folglich als "Hamburger-Menü" bekannt.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung, um es sichtbar zu machen, durch geeignete Steuermechanismen zugänglich ist (normalerweise Berührung für mobile Geräte), wie in [Steuermechanismen](#steuermechanismen) oben beschrieben, und dass der Rest der Seite ausgeblendet oder in einer Weise verschoben wird, während auf das Menü zugegriffen wird, um Verwirrung zu vermeiden.

Hier ist ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf mobilen Geräten ist die Eingabe von Daten für Benutzer in der Regel lästiger als das Äquivalent auf Desktop-Computern. Es ist bequemer, Text in Formulare mit einer Desktop- oder Laptop-Tastatur einzugeben als mit einer Touchscreen-Virtual Keyboard oder einer winzigen physischen Tastatur eines mobilen Geräts.

Aus diesem Grund lohnt es sich zu versuchen, die benötigte Tippmenge zu minimieren. Ein Beispiel: Anstatt die Benutzer dazu zu bringen, jedes Mal ihren Berufstitel mit einem regulären Texteingabefeld auszufüllen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option anbieten, die ein Texteingabefeld zur Eingabe jeglicher Ausreißer anzeigt. Sie können ein einfaches Beispiel dieses Konzepts in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) sehen (siehe das [Common Jobs-Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen wie dem Datum auf mobilen Plattformen in Betracht zu ziehen, da diese gut damit umgehen können — sowohl Android als auch iOS zeigen beispielsweise brauchbare Widgets, die gut mit dem Gerät harmonieren. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (siehe die [HTML5 Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — laden Sie diese und manipulieren Sie sie auf mobilen Geräten. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen/Telefonnummern an.
- Typen `time` und `date` zeigen geeignete Picker zum Auswählen von Zeiten und Daten an.

Wenn Sie eine andere Lösung für Desktops bieten möchten, können Sie immer eine andere Markierung an Ihre mobilen Geräte unter Verwendung von Feature-Erkennung ausliefern. Sehen Sie sich [Input Types](https://diveinto.html5doctor.com/detect.html#input-types) für rohe Informationen zur Erkennung verschiedener Eingabetypen an und lesen Sie auch unseren [Artikel zur Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) für viel mehr Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details über häufige mobile spezifische Barrierefreiheitsprobleme gegeben und wie man sie überwinden kann. Wir haben Sie auch durch die Nutzung der häufigsten Screenreader geführt, um Sie bei der Barrierefreiheitstests zu unterstützen.

## Siehe auch

- [Leitfaden zur Entwicklung für das mobile Web](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign behandeln.
- [Machen Sie Ihre Website auf Touch-Geräten funktionsfähig](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Berührungsereignissen, um Interaktionen auf mobilen Geräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
