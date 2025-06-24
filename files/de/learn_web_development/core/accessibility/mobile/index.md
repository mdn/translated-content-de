---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web über mobile Geräte sehr populär ist und renommierte Plattformen wie iOS und Android voll ausgestattete Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobilspezifische Barrierefreiheitsüberlegungen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken für Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis für Barrierefreiheitsprobleme, die durch einige Arten von Ereignissen verursacht werden.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Wissen, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist auf modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte komplett andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser-Sniffing zu benutzen und ihnen komplett separate Websites zur Verfügung zu stellen, sind längst vorbei (obwohl immer noch einige Unternehmen die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können mobile Geräte in der Regel voll ausgestattete Websites verarbeiten, und die Hauptplattformen bieten sogar integrierte Screenreader, die sehbehinderten Nutzern die erfolgreiche Nutzung ermöglichen. Moderne mobile Browser haben auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und benutzerfreundlich zu machen, muss man nur die allgemeinen Prinzipien des guten Webdesigns und der Barrierefreiheit befolgen.

Es gibt jedoch einige Ausnahmen, die besondere Überlegungen auf mobilen Geräten erfordern; die wichtigsten sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Steuerungselemente wie Schaltflächen sowohl auf mobilen Geräten (d.h. hauptsächlich Touchscreens) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie die Anforderungen an Benutzereingaben auf mobilen Geräten so schmerzlos wie möglich (z. B. in Formularen das Tippen auf ein Minimum beschränken).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownloadgrößen minimieren und die Bereitstellung von Bildern für hochauflösende Bildschirme bedenken.

## Zusammenfassung der Screenreader-Tests auf Android und iOS

Die gebräuchlichsten mobilen Plattformen haben voll funktionsfähige Screenreader. Diese funktionieren weitgehend wie Desktop-Screenreader, werden jedoch hauptsächlich mit Touch-Gesten anstelle von Tastenkombinationen bedient.

Lassen Sie uns die beiden wichtigsten betrachten: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, ermitteln Sie, welches Telefonmodell und welche Android-Version Sie haben, und suchen dann nach dem TalkBack-Menü. Es gibt hierbei große Unterschiede zwischen den Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben TalkBack in neueren Telefonen überhaupt nicht, sondern nutzen stattdessen ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie auf den Schieberegler, um TalkBack zu aktivieren. Folgen Sie allen weiteren Bildschirmanweisungen, die Ihnen gegeben werden.

Wenn TalkBack aktiviert ist, sind die grundlegenden Steuerungen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Einmaliges Tippen auf eine App wählt sie aus, und das Gerät liest vor, welche App es ist.
2. Durch Wischen nach links und rechts können Sie zwischen Apps oder Schaltflächen/Steuerelementen wechseln, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch Doppeltippen wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "per Touch erkunden" — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn herum, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie bewegen.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (verwenden Sie die aktuell aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zum Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und nach links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack aktiviert ist, erfolgt das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Ende des Sperrbildschirms nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie dann zum entsprechenden Eingabebildschirm geführt, um es einzugeben.

Sie können auch per Touch erkunden, um die _Entsperren_-Schaltfläche unten in der Bildschirmmitte zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, wo immer Sie sich auf dem Gerät bewegen. Erstere bietet globale Optionen in Bezug auf das gesamte Gerät und letztere bietet Optionen, die nur für die aktuelle App/Bildschirm gelten, auf dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen verfügbaren Optionen unter den globalen und lokalen Kontextmenüs siehe [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Sie können das lokale Kontextmenü im Webbrowser verwenden, um Optionen zum Navigieren auf Webseiten nur über die Überschriften, Formularelemente oder Links, oder auch zeilenweise zu finden.

Mit eingeschaltetem TalkBack zum Beispiel:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite mit vielen Überschriften ein, z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie Ihren Finger los, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Sobald Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü zu aktivieren.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Markierungen" finden.
7. Doppeltippen Sie, um diese auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Markierungen zu wechseln.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard", und doppeltippen Sie, um zu aktivieren.

> [!NOTE]
> Siehe [Einstieg in Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine umfassendere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um es zu aktivieren, gehen Sie zur App _Einstellungen_ und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver-Schalter_, um es zu aktivieren (Sie sehen auch mehrere andere Optionen im Zusammenhang mit VoiceOver auf dieser Seite).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einmaliges Tippen bewirkt, dass das von Ihnen angetippte Element ausgewählt wird; Ihr Gerät spricht das angetippte Element aus.
2. Sie können auch durch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger über den Bildschirm schieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf den Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — z. B. ein Foto in der Kamera-App aufnehmen.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ unter Verwendung der obigen Gesten und schalten Sie den _VoiceOver-Schalter_ wieder aus.

#### Telefon entsperren

Zum Entsperren des Telefons müssen Sie wie gewohnt die Home-Taste drücken (oder wischen). Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben erklärt) und dann doppelt tippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell zwischen einer Reihe von nützlichen Optionen wählen können. So verwenden Sie ihn:

1. Drehen Sie mit zwei Fingern auf dem Bildschirm, als würde bạn ein Ziffernblatt drehen. Jede Option wird vorgelesen, sobald Sie weiter drehen. Sie können vor- und zurückgehen, um durch die Optionen zu blättern.
2. Sobald Sie die gewünschte Option gefunden haben:
   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es eine Option ist, deren Wert Sie iterieren können (wie Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die unter dem Rotor verfügbaren Optionen sind kontextabhängig — sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Lassen Sie uns das Surfen im Web mit VoiceOver ausprobieren:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite mit vielen Überschriften ein, z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen haben, und lassen Sie ihn dann los, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Sobald Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppelt antippen, um es auszuwählen (z. B. einem Link zu folgen).
5. Standardmäßig wird die gewählte Rotoroption die Sprechgeschwindigkeit sein; derzeit können Sie nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger wie ein Zifferblatt über den Bildschirm, um den Rotor zu öffnen und zwischen seinen Optionen zu wechseln. Hier einige Beispiele der verfügbaren Optionen:

   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Formularsteuerelemente_: Wechseln Sie zwischen Formularsteuerelementen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, sofern verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Referenz über die verfügbaren VoiceOver-Gesten und weitere Hinweise zur Barrierefreiheitsprüfung auf iOS siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über Barrierefreiheit mit CSS und JavaScript haben wir die Idee von Ereignissen betrachtet, die spezifisch für einen bestimmten Steuerungsmechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Um es zusammenzufassen, verursachen diese Barrierefreiheitsprobleme, da andere Steuerungsmechanismen die zugehörige Funktionalität nicht aktivieren können.

Beispielsweise ist das [click](/de/docs/Web/API/Element/click_event) Ereignis in Bezug auf die Barrierefreiheit gut — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf dem der Handler gesetzt ist, es anzutippen oder durch Drücken von Enter/Return auf einem berührungsempfindlichen Gerät aktiviert werden. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ führen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) zu Problemen — ihre Ereignishandler können nicht mit Nicht-Maus-Steuerungen aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder Touch zu steuern, sehen Sie das Problem. Dies tritt auf, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie verschiedene, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf berührungsempfindlichen Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Berührungsereignisse zusammen verwendet werden — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch vollständig funktionierende Beispiele sehen, wie verschiedene Steuerungsmechanismen implementiert werden können, unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und Auflösung, damit sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte angesprochen werden müssen, sind:

- Eignung von Layouts für mobile Geräte. Ein Mehrspaltenlayout funktioniert auf einem schmalen Bildschirm nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Konservieren von Bildgrößen beim Download. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine Bilder, die so groß sind wie ihre Gegenstücke auf dem Desktop, und sie befinden sich eher in langsameren Netzwerkverbindungen. Daher ist es sinnvoll, kleineren Geräten Bilder in angemessener Größe bereitzustellen. Sie können dies mithilfe von [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Denken an hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit die Anzeige weiterhin scharf und klar aussieht. Wiederum können Bilder je nach Bedarf mit responsiven Bildtechniken bereitgestellt werden. Darüber hinaus können viele Bildanforderungen durch das SVG-Vektorgrafikformat, das heute gut von Browsern unterstützt wird, erfüllt werden. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der Größe, in der es angezeigt wird (siehe [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion der Techniken für responsives Design führen, da diese an anderen Stellen bei MDN behandelt werden (siehe die obigen Links).

### Spezielle Überlegungen für mobile Geräte

Es gibt noch weitere wichtige Punkte, die bei der Erstellung von Websites für mobile Geräte zugänglicher berücksichtigt werden müssen. Wir haben hier ein paar aufgelistet, aber wir werden mehr hinzufügen, wenn uns weitere einfallen.

#### Zoom nicht deaktivieren

Mit dem [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) ist es möglich, den Zoom zu deaktivieren. Stellen Sie sicher, dass die Größenänderung immer aktiviert ist und die Breite auf die Breite des Geräts im {{htmlelement("head")}} gesetzt ist:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten nach Möglichkeit niemals `user-scalable=no` festlegen — viele Menschen sind auf den Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche zerstören könnte; in solchen Fällen sollten Sie, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, eine andere gleichwertige Lösung bereitstellen, z. B. eine Steuerung, um die Textgröße so zu erhöhen, dass Ihre UI dadurch nicht zerstört wird.

#### Menüs zugänglich halten

Da der Bildschirm bei mobilen Geräten so viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein winziges Symbol oben auf dem Display zu verkleinern — das nur bei Bedarf gedrückt werden kann, um das Menü anzuzeigen —, wenn die Website auf mobilen Geräten angezeigt wird. Dies wird häufig durch ein „drei horizontale Linien“ Symbol dargestellt, und das Designmuster ist daher als „Hamburger-Menü“ bekannt.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung, um es anzuzeigen, durch geeignete Steuerungsmechanismen zugänglich gemacht wird (normalerweise Touch für mobile Geräte), wie in [Steuerungsmechanismen](#steuerungsmechanismen) oben besprochen, und dass der Rest der Seite auf irgendeine Weise versteckt oder verschoben wird, während das Menü zugegriffen wird, um Verwirrung beim Navigieren zu vermeiden.

Hier finden Sie ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist die Eingabe von Daten im Allgemeinen lästiger für Benutzer als das entsprechende Erlebnis auf Desktop-Computern. Es ist bequemer, Text mit einer Tastatur eines Desktops oder Laptops in Formulareingabefelder einzugeben als mit einer virtuellen Tastatur auf dem Touchscreen oder einer winzigen physischen Mobil-Tastatur.

Aus diesem Grund empfiehlt es sich, die erforderlichen Tippeingaben zu minimieren. Zum Beispiel könnten Sie anstelle von regelmäßigen Texteingaben die Benutzer auffordern, ihren Job-Titel jedes Mal einzugeben, Ihnen stattdessen ein {{htmlelement("select")}} Menu mit den häufigsten Optionen zu präsentieren (was auch zur Konsistenz der Dateneingabe beiträgt) und eine Option "Andere" anzubieten, die ein Textfeld anzeigt, in das Ausnahmen eingegeben werden können. Sie können ein einfaches Beispiel für diese Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (sehen Sie das [Beispiel für häufige Jobs live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)) sehen.

Es lohnt sich auch, die Verwendung von HTML-Eingabetypen wie Datum auf mobilen Plattformen in Erwägung zu ziehen, da sie damit gut umgehen können — sowohl Android als auch iOS zeigen zum Beispiel benutzerfreundliche Widgets an, die gut zur Gerätenerfahrung passen. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (sehen Sie die [HTML5 Formularexamples live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- `number`, `tel` und `email` Typen zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern an.
- `time` und `date` Typen zeigen geeignete Auswahlelemente zum Auswählen von Zeiten und Daten an.

Wenn Sie für Desktops eine andere Lösung anbieten möchten, können Sie immer unterschiedlichen Markup an Ihre mobilen Geräte mit Feature-Detection bereitstellen. Lesen Sie unseren [Artikel über Feature-Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für weitere Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen mobilen barrierefreiheitsspezifischen Problemen und deren Überwindung vermittelt. Wir haben Sie auch durch die Nutzung der gebräuchlichsten Screenreader geführt, um Sie beim Testen der Barrierefreiheit zu unterstützen.

## Siehe auch

- [Richtlinien für die Entwicklung mobiler Webanwendungen](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln im _Smashing Magazine_, die verschiedene Techniken für das Design von mobilen Websites abdecken.
- [Machen Sie Ihre Website für Touch-Geräte funktionsfähig](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Berührungsereignissen, um Interaktionen auf mobilen Geräten zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
