---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugang zum Web auf mobilen Geräten so populär ist und renommierte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobile, spezifische Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Kennen von Barrierefreiheitsproblemen bei einigen Arten von Ereignissen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Mechanismen zur Benutzereingabe auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser spezifische Vorteile hinsichtlich der Benutzerfreundlichkeit für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist gut in modernen mobilen Geräten. Die Zeiten sind vorbei, in denen mobile Geräte komplett andere Webtechnologien als Desktop-Browser verwendeten, was Entwickler zwang, Browser-Erkennung zu verwenden und ihnen völlig separate Seiten bereitzustellen (obwohl einige Unternehmen immer noch die Nutzung mobiler Geräte erkennen und eine separate mobile Domain bereitstellen).

Heutzutage können mobile Geräte in der Regel voll ausgestattete Websites verarbeiten, und die Hauptplattformen haben sogar Screenreader integriert, um sehbehinderten Nutzern die Nutzung zu ermöglichen. Moderne mobile Browser neigen auch dazu, gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu bieten.

Um eine Website auf mobilen Geräten zugänglich und nutzbar zu machen, müssen Sie nur allgemeine gute Webdesign- und Barrierefreiheitspraktiken befolgen.

Es gibt einige Ausnahmen, die besondere Berücksichtigung auf mobilen Geräten erfordern; die Hauptaspekte sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Schnittstellensteuerungen wie Schaltflächen sowohl auf Mobilgeräten (z. B. hauptsächlich Touchscreen) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie Anforderungen an Benutzereingaben auf Mobilgeräten so schmerzfrei wie möglich (z. B. in Formularen, reduzieren Sie die Eingabe auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownloadgrößen einsparen und denken Sie an die Bereitstellung von Bildern für hochauflösende Bildschirme.

## Zusammenfassung des Screenreader-Tests auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, außer dass sie hauptsächlich mit Touch-Gesten anstelle von Tastenkombinationen bedient werden.

Schauen wir uns die beiden Hauptscreenreader an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, suchen Sie Ihr Telefonmodell und die Android-Version, die Sie haben, und suchen Sie dann nach dem TalkBack-Menü. Es neigt dazu, je nach Android-Version und sogar zwischen verschiedenen Telefonmodellen sehr unterschiedlich zu sein. Einige Telefonhersteller (z. B. Samsung) haben TalkBack auf neueren Telefonen nicht einmal, sondern stattdessen ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack einzuschalten. Folgen Sie allen zusätzlichen Anweisungen auf dem Bildschirm, die Ihnen präsentiert werden.

Wenn TalkBack eingeschaltet ist, sind die Grundsteuerungen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Einmaliges Antippen einer App wählt sie aus und das Gerät liest aus, was die App ist.
2. Durch Wischen nach links und rechts wechselst du zwischen Apps oder Schaltflächen/Steuerungen, wenn du in einer Steuerleiste bist. Das Gerät liest jede Option vor.
3. Doppeltippen irgendwo öffnet die App/wählt die Option aus.
4. Sie können auch "explore by touch" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie fahren.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (unter Verwendung der derzeit aktivierten Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer glatten Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Bildschirmrand nach oben wischen. Wenn Sie einen Sicherheitscode oder ein Muster zum Entsperren des Geräts festgelegt haben, gelangen Sie zum entsprechenden Eingabebildschirm, um es einzugeben.

Sie können auch durch Berührung die Schaltfläche _Entsperren_ unten in der Mitte des Bildschirms finden und dann doppelt tippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie, egal wo auf dem Gerät Sie sich befinden, sowohl globale als auch lokale Kontextmenüs aufrufen. Erstere bieten globale Optionen, die sich auf das gesamte Gerät beziehen, während letztere Optionen bieten, die sich nur auf die aktuelle App/den aktuellen Bildschirm beziehen, auf dem Sie sich befinden.

So gelangen Sie zu diesen Menüs:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen verfügbaren Optionen in den globalen und lokalen Kontextmenüs siehe [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie auf Webseiten nur mit Überschriften, Formularsteuerelementen oder Links navigieren oder Zeilenweise navigieren usw.

Zum Beispiel, wenn TalkBack eingeschaltet ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, wie zum Beispiel die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Markieren Sie die URL-Leiste, indem Sie links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und lassen Sie dann Ihren Finger los, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie mit einer geschmeidigen Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um es auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um zum Standardmodus zurückzukehren, geben Sie das lokale Kontextmenü erneut ein, indem Sie nach oben und rechts wischen, wählen Sie "Default" und doppeltippen Sie, um es zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zu Ihrer _Einstellungen_-App und wählen Sie _Zugänglichkeit > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auch mehrere andere Optionen im Zusammenhang mit VoiceOver auf dieser Seite).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Zugänglichkeit_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, werden die grundlegenden Steuerungsgesten von iOS etwas anders sein:

1. Ein einzelnes Tippen wählt das Element aus, auf das Sie tippen; Ihr Gerät spricht das Element aus, auf das Sie getippt haben.
2. Sie können auch durch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger auf dem Bildschirm verschieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element finden, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion auszuführen — zum Beispiel ein Foto zu machen, während Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie mit den oben genannten Gesten zurück zu _Einstellungen > Allgemein > Zugänglichkeit > VoiceOver_ und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie wie gewohnt die Home-Taste drücken (oder wischen). Wenn Sie einen Zugangscode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben erklärt) und dann doppeltippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Die Rotor-Funktion verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus einer Reihe von häufig nützlichen Optionen wählen können. So verwenden Sie es:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie ein Ziffernblatt drehen. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können hin und her gehen, um durch die Optionen zu blättern.
2. Sobald Sie die gewünschte Option gefunden haben:
   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie ändern können (wie Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextsensitiv — sie unterscheiden sich je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe Beispiel unten).

#### Surfen auf Webseiten

Probieren wir das Surfen im Web mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, wie zum Beispiel die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Markieren Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Für jedes Zeichen halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppeltippen, um es auszuwählen (z. B. einem Link zu folgen).
5. Standardmäßig ist die ausgewählte Rotor-Option die Sprechgeschwindigkeit; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger wie ein Ziffernblatt um den Bildschirm, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für verfügbare Optionen:

   - _Sprechgeschwindigkeit_: Ändern der Sprechgeschwindigkeit.
   - _Container_: Wechseln zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln zwischen Überschriften auf der Seite.
   - _Links_: Wechseln zwischen Links auf der Seite.
   - _Formularsteuerelemente_: Wechseln zwischen Formularsteuerelementen auf der Seite.
   - _Sprache_: Wechseln zwischen verschiedenen Übersetzungen, wenn verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Anleitung zu den verfügbaren VoiceOver-Gesten und weiteren Tipps zur Barrierefreiheitsprüfung auf iOS siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem CSS und JavaScript Barrierefreiheitsartikel haben wir uns mit dem Konzept von Ereignissen befasst, die spezifisch für eine bestimmte Art von Steuermechanismus sind (siehe [Mouse-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Diese verursachen Barrierefreiheitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Zum Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis barrierefrei — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf dem der Handler festgelegt ist, es mit Tabulatortaste auswählen und die Eingabetaste drücken oder auf einem Touchscreen-Gerät antippen, aufgerufen werden. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ erzeugen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht mit nicht-maussteuerungen aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([siehe Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder einem Touchscreen zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerformen zu ermöglichen, müssen Sie unterschiedliche, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Berührungsereignisse zusammen verwendet werden — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) ebenfalls).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele dafür sehen, wie verschiedene Steuerungsmechanismen implementiert werden, unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch ändern zu lassen, basierend auf Faktoren wie Bildschirmgröße und Auflösung, sodass sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere: Die häufigsten Probleme, die für mobile Geräte behoben werden müssen, sind:

- Eignung der Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut und die Textgröße muss möglicherweise erhöht werden, um lesbar zu sein. Solche Probleme können gelöst werden, indem ein responsives Layout mit Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) erstellt wird.
- Einsparen von heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine genauso großen Bilder wie ihre Desktop-Pendants und es ist wahrscheinlicher, dass sie sich in langsamen Netzwerken befinden. Daher ist es ratsam, kleinere Bilder für schmalere Bildschirme bereitzustellen. Sie können dies mit [techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) erreichen.
- Nachdenken über hohe Auflösungen. Viele mobile Geräte verfügen über hochauflösende Bildschirme und benötigen daher höher auflösende Bilder, damit die Darstellung weiterhin scharf und deutlich bleibt. Auch hier können Sie Bilder angemessen durch Techniken für responsive Bilder bereitstellen. Zusätzlich können viele Bildanforderungen durch das SVG-Vektorbildformat erfüllt werden, das heute über die meisten Browser gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der darzustellenden Größe (siehe [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für mehr Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Techniken des responsiven Designs bieten, da sie an anderen Orten auf MDN behandelt werden (siehe die obigen Links).

### Spezifische mobile Überlegungen

Es gibt andere wichtige Probleme, die beim Zugänglichmachen von Websites auf mobilen Geräten zu berücksichtigen sind. Wir haben hier einige aufgeführt, aber wir werden weitere hinzufügen, wenn uns welche einfallen.

#### Zoomen nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) ist es möglich, das Zoomen zu deaktivieren. Stellen Sie stets sicher, dass die Anpassung der Größe aktiviert und die Breite auf die Breite des Geräts im {{htmlelement("head")}} gesetzt ist:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten `user-scalable=no` möglichst nie setzen — viele Menschen sind auf das Zoomen angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. In bestimmten Situationen könnte das Zoomen die Benutzeroberfläche beschädigen; falls Sie das Gefühl haben, dass Sie das Zoomen deaktivieren müssen, sollten Sie eine andere Art von Äquivalent anbieten, wie eine Steuerung zur Größenänderung des Textes, die Ihre Benutzeroberfläche nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein winziges Symbol oben in der Anzeige zu reduzieren — das nur gedrückt werden kann, um das Menü anzuzeigen, wenn es benötigt wird — wenn die Seite auf mobilen Geräten angezeigt wird. Dies wird meist durch ein „drei horizontale Linien“-Symbol dargestellt, und das Designmuster wird daher als „Hamburger-Menü“ bezeichnet.

Bei der Implementierung eines solchen Menüs müssen Sie sicherstellen, dass das Steuerelement, um es anzuzeigen, durch entsprechende Steuermechanismen erreichbar ist (normalerweise Berührung für mobile Geräte) wie im Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) oben dargestellt, und dass der Rest der Seite aus dem Weg geräumt oder in irgendeiner Weise versteckt wird, während auf das Menü zugegriffen wird, um Verwirrung bei der Navigation zu vermeiden.

Klicken Sie hier für ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf Mobilgeräten ist die Eingabe von Daten tendenziell ärgerlicher für Benutzer im Vergleich zur entsprechenden Erfahrung auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mit einer Desktop- oder Laptop-Tastatur einzugeben, als eine virtuelle Touchscreen-Tastatur oder eine winzige physische Mobilgerätetastatur zu verwenden.

Aus diesem Grund ist es sinnvoll, die Menge an erforderlicher Texteingabe zu minimieren. Zum Beispiel, anstatt dass Benutzer ihren Berufsbezeichnung jedes Mal in einer regulären Texteingabe eingeben müssen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü anbieten, das die häufigsten Optionen enthält (was auch bei der Konsistenz bei der Dateneingabe hilft), und eine "Andere"-Option anbieten, die ein Textfeld anzeigt, um eventuelle Ausreißer einzugeben. Ein einfaches Beispiel für diese Idee in Aktion finden Sie in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (siehe das [Beispiel für häufige Berufe live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es ist auch sinnvoll, die Verwendung von HTML-Formulareingabetypen wie Datum auf mobilen Plattformen in Betracht zu ziehen, da sie diese gut handhaben — sowohl Android als auch iOS zum Beispiel zeigen benutzbare Widgets, die gut zur Geräteerfahrung passen. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (sehen Sie die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswähler zum Auswählen von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, können Sie immer unterschiedliches Markup an Ihre mobilen Geräte mit Funktionsdetektion bereitstellen. Schauen Sie sich unseren [Artikel zur Funktionsdetektion](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für mehr Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details über häufige, mobile, spezifische Barrierefreiheitsprobleme und deren Überwindung gegeben. Wir haben Sie auch durch die Verwendung der häufigsten Screenreader geführt, um Ihnen bei der Barrierefreiheitsprüfung zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln im _Smashing Magazine_, die verschiedene Techniken für mobiles Webdesign behandeln.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf Mobilgeräten zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
