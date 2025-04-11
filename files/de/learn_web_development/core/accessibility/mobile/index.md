---
title: Mobile-Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web über mobile Geräte so populär ist und renommierte Plattformen wie iOS und Android über umfassende Zugänglichkeitstools verfügen, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel befasst sich mit spezifischen Überlegungen zur Zugänglichkeit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls vermittelten Best Practices zur Zugänglichkeit.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Bildschirmlesern auf iOS und Android.</li>
          <li>Verständnis der Zugänglichkeitsprobleme bei bestimmten Arten von Ereignissen.</li>
          <li>Spezifische Techniken für nutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Kennen, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zugänglichkeit auf mobilen Geräten

Der Stand der Zugänglichkeit und die Unterstützung von Webstandards im Allgemeinen ist gut auf modernen mobilen Geräten. Die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser nutzten und Entwickler durch Browser-Erkennung gezwungen waren, ihnen völlig separate Seiten zu liefern, sind längst vorbei (obwohl einige Unternehmen immer noch die Nutzung von mobilen Geräten erkennen und ihnen eine separate mobile Domain liefern).

Heutzutage können mobile Geräte in der Regel voll funktionsfähige Websites verarbeiten, und die wichtigsten Plattformen verfügen sogar über eingebaute Bildschirmleser, die es sehbehinderten Nutzern ermöglichen, sie erfolgreich zu nutzen. Moderne mobile Browser haben auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und nutzbar zu machen, müssen Sie lediglich die allgemeinen Best Practices für gutes Webdesign und Zugänglichkeit befolgen.

Es gibt einige Ausnahmen, die auf mobilen Geräten besondere Überlegungen erfordern; die wichtigsten sind:

- Steuermechanismen — Stellen Sie sicher, dass Interface-Steuerelemente wie Buttons auf mobilen Geräten (d.h. hauptsächlich Touchscreens) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie Benutzereingaben auf mobilen Geräten so schmerzfrei wie möglich (z. B. in Formularen, indem Sie das Tippen auf ein Minimum beschränken).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, die Bilddownload-Größen reduzieren und an die Bereitstellung von Bildern für hochauflösende Bildschirme denken.

## Zusammenfassung der Bildschirmlesertests auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Bildschirmleser. Diese funktionieren ähnlich wie Desktop-Bildschirmleser, werden jedoch hauptsächlich durch Berührungsgesten anstelle von Tastenkombinationen bedient.

Schauen wir uns die beiden wichtigsten an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Bildschirmleser ist ins Android-Betriebssystem integriert.

Um ihn einzuschalten, schauen Sie, welches Modell und welche Android-Version Sie haben, und suchen Sie dann nach dem TalkBack-Menü. Es unterscheidet sich oft stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben in neueren Telefonen nicht einmal TalkBack und stattdessen ihren eigenen Bildschirmleser.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack einzuschalten. Folgen Sie allen zusätzlichen Aufforderungen auf dem Bildschirm.

Wenn TalkBack eingeschaltet ist, werden die Grundsteuerungen Ihres Android-Geräts etwas anders sein. Zum Beispiel:

1. Durch einfaches Antippen einer App wird sie ausgewählt, und das Gerät liest aus, was die App ist.
2. Durch Wischen nach links und rechts bewegen Sie sich zwischen Apps oder Buttons/Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch Doppeltippen irgendwo wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn herum, und Ihr Gerät wird die verschiedenen Apps/Elemente vorlesen, die Sie überqueren.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menü-Bildschirm (verwenden Sie die derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie mit einer gleichmäßigen Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie mit zwei Fingern nach links und rechts wischen, um zwischen ihnen zu wechseln.

Für eine vollständigere Liste der TalkBack-Gesten siehe [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack aktiviert ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Rand des Sperrbildschirms nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts eingerichtet haben, werden Sie dann zum entsprechenden Eingabebildschirm geführt, um ihn einzugeben.

Sie können auch durch Berührung erkunden, um die _Entsperren_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie globale und lokale Kontextmenüs aufrufen, egal wo Sie sich auf dem Gerät befinden. Ersteres bietet globale Optionen in Bezug auf das gesamte Gerät, letzteres bietet Optionen, die nur für die aktuelle App/den aktuellen Bildschirm, in dem Sie sich befinden, relevant sind.

Um auf diese Menüs zuzugreifen:

1. Rufen Sie das globale Menü auf, indem Sie schnell nach unten und dann nach rechts wischen.
2. Rufen Sie das lokale Menü auf, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie auf diese, um sie auszuwählen.

Für Details zu allen Optionen unter den globalen und lokalen Kontextmenüs siehe [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur anhand der Überschriften, Formularsteuerungen oder Links navigieren oder zeilenweise navigieren können.

Zum Beispiel, wenn TalkBack aktiviert ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite mit mehreren Überschriften ein, z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie darauf gelangen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie diese.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie mit einer sanften Bewegung nach oben und rechts, um in das lokale Inhaltsmenü zu gelangen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarks" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarks zu wechseln.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist ins iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zur _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um ihn zu aktivieren (Sie werden auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver sehen).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, werden die grundlegenden Kontrollgesten von iOS etwas anders:

1. Ein einfaches Antippen bewirkt, dass das Element, auf das Sie tippen, ausgewählt wird; Ihr Gerät wird das Element vorlesen, auf das Sie getippt haben.
2. Sie können auch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger über den Bildschirm bewegen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — beispielsweise ein Foto machen, während Sie in der Kamera-App sind.

Um VoiceOver wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den oben genannten Gesten und schalten Sie den _VoiceOver_-Schieberegler wieder auf aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode eingerichtet haben, können Sie jede Nummer durch Wischen/Bewegen auswählen (wie oben erläutert) und dann doppeltippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen ein Navigationsmerkmal namens Rotor zur Verfügung, mit dem Sie schnell aus einer Reihe nützlicher Optionen wählen können. So verwenden Sie ihn:

1. Drehen Sie zwei Finger auf dem Bildschirm, als ob Sie ein Zifferblatt drehen würden. Jede Option wird laut vorgelesen, während Sie weiter drehen. Sie können vor und zurück gehen, um die Optionen zu durchlaufen.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie ändern können (z. B. Lautstärke oder Sprachrate), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die verfügbaren Optionen unter dem Rotor sind kontextabhängig — sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Probieren wir es mit dem Web-Browsing mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie darauf gelangen, und dann doppeltippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es zu wählen. Doppeltippen Sie, um es einzugeben.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie diese.

4. Wischen Sie nach links und rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element doppeltippen, um es auszuwählen (z. B. einem Link folgen).
5. Standardmäßig ist die ausgewählte Rotor-Option die Sprachrate; Sie können derzeit nach oben und unten wischen, um die Sprachrate zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger auf dem Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Sprachrate_: Ändern Sie die Sprachrate.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen den Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen den Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Referenz der verfügbaren VoiceOver-Gesten und weitere Hinweise zur Barrierefreiheitstestung auf iOS siehe [Apple's VoiceOver documentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem Artikel zu CSS und JavaScript Barrierefreiheit haben wir die Idee von Ereignissen betrachtet, die spezifisch für einen bestimmten Steuermechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung: Diese verursachen Zugänglichkeitsprobleme, da andere Steuermechanismen die zugeordnete Funktionalität nicht aktivieren können.

Ein Beispiel: Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist in Bezug auf Barrierefreiheit gut — ein zugeordneter Ereignis-Handler kann durch Klicken auf das Element, auf das der Handler gesetzt ist, durch Tabben zu ihm und Drücken von Enter/Return oder durch Antippen auf einem Touchscreen-Gerät aufgerufen werden. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ schaffen Maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignis-Handler können nicht mit nicht-Maus-Steuerungen aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder Berührung zu steuern, werden Sie das Problem sehen. Dies tritt auf, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie andere, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie man Maus- und Berührungsereignisse zusammen verwendet — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, die zeigen, wie unterschiedliche Steuermechanismen implementiert werden, bei [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Features Ihrer Apps dynamisch an Faktoren wie Bildschirmgröße und Auflösung anzupassen, sodass sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte angegangen werden müssen, sind:

- Eignung der Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), [viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) und [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Bewahrung der Bildgrößen beim Herunterladen. Im Allgemeinen benötigen Geräte mit kleinen Bildschirmen keine so großen Bilder wie ihre Desktop-Pendants, und sie sind eher mit langsamen Netzwerkverbindungen verbunden. Daher ist es ratsam, kleinere Bilder auf Geräten mit schmalem Bildschirm entsprechend bereitzustellen. Sie können dies mit [responsiven Bildtechniken](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Berücksichtigung von hochauflösenden Bildern. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit die Anzeige weiterhin scharf und klar aussieht. Auch hier können Sie Bilder mit geeigneten responsiven Bildtechniken bereitstellen. Viele Bildanforderungen können zudem durch das SVG-Vektorbildformat erfüllt werden, das heute in Browsern gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt unabhängig von der Größe, in der es angezeigt wird, scharf (siehe [Einbeziehung von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über responsive Designtechniken liefern, da sie an anderen Stellen auf MDN behandelt werden (siehe die oben genannten Links).

### Spezifische Überlegungen für mobile Geräte

Es gibt andere wichtige Probleme zu beachten, wenn man Websites auf mobilen Geräten zugänglicher macht. Wir haben hier ein paar aufgelistet, aber wir werden mehr hinzufügen, wenn wir an sie denken.

#### Vergrößerung nicht deaktivieren

Mit [viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) ist es möglich, die Vergrößerung zu deaktivieren. Stellen Sie sicher, dass die Größenanpassung aktiviert ist, und setzen Sie die Breite im {{htmlelement("head")}} auf die Breite des Geräts:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn es überhaupt möglich ist — viele Menschen sind darauf angewiesen, den Inhalt Ihrer Website vergrößern zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen Zoom das UI-Layout brechen könnte; in solchen Fällen sollten Sie, wenn Sie der Meinung sind, dass Sie den Zoom deaktivieren müssen, eine andere Art von Äquivalent bereitstellen, wie z. B. eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr häufig, Media-Queries und andere Technologien zu verwenden, um das Navigationsmenü zu verkleinern, sodass es bei der Ansicht auf mobilen Geräten als winziges Symbol oben auf dem Display angezeigt wird — welches nur bei Bedarf gedrückt wird, um das Menü anzuzeigen. Dies wird oft durch ein "drei horizontale Linien"-Symbol dargestellt, und das Designmuster ist daher als "Hamburger-Menü" bekannt.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung zur Anzeige des Menüs durch geeignete Steuerungsmechanismen (normalerweise Berührung für mobile Geräte) zugänglich ist, wie in [Steuermechanismen](#steuermechanismen) oben diskutiert, und dass der Rest der Seite aus dem Weg geräumt oder auf irgendeine Weise verborgen wird, während das Menü aufgerufen wird, um Verwirrung bei der Navigation zu vermeiden.

Klicken Sie hier für ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf mobilen Geräten ist das Eingeben von Daten tendenziell ärgerlicher für die Benutzer als das entsprechende Erlebnis auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben über eine Desktop- oder Laptop-Tastatur als über eine virtuelle Touchscreen-Tastatur oder eine winzige physische Mobil-Tastatur einzugeben.

Aus diesem Grund lohnt es sich, die benötigte Eingabemenge zu minimieren. Ein Beispiel: Statt Benutzer jedes Mal ihren Jobtitel mit einer regulären Texteingabe ausfüllen zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den gebräuchlichsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option anbieten, die ein Textfeld anzeigt, um eventuelle Abweichungen einzugeben. Sie können ein einfaches Beispiel dieser Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) sehen (siehe das [simple Jobs Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen wie dem Datum auf mobilen Plattformen zu erwägen, da diese gut gehandhabt werden — sowohl Android als auch iOS, beispielsweise, zeigen benutzerfreundliche Widgets, die gut zur Geräteerfahrung passen. Siehe [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (sehen Sie die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zum Eingeben von Zahlen/Telefonnummern an.
- Typen `time` und `date` zeigen geeignete Auswähler zum Auswählen von Zeiten und Daten an.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie immer unterschiedliche Markup an Ihre mobilen Geräte mit Funktionsprüfung bereitstellen. Siehe unseren [Artikel zur Funktionsprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für weitere Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details über häufige mobile spezifische Zugänglichkeitsprobleme und deren Überwindung geboten. Wir haben Ihnen auch die Verwendung der gängigsten Bildschirmleser gezeigt, um Sie bei der Zugänglichkeitstestung zu unterstützen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln im _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign abdecken.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Berührungsereignissen, um Interaktionen auf mobilen Geräten zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
