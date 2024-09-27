---
title: Standardmetadaten-Namen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokumentenmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadatennamen angibt und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert angibt.

### Standardmetadaten-Namen definiert in der HTML-Spezifikation

Die HTML-Spezifikation definiert die folgende Gruppe von Standardmetadatennamen:

- `application-name`: der Name der Anwendung, die auf der Webseite ausgeführt wird.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber möglicherweise auch Informationen wie den Dokumentnamen oder einen Status enthält.
  > - Einfache Webseiten sollten keinen Anwendungsnamen definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und genaue Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: die Kennung der Software, die die Seite generiert hat.
- `keywords`: relevante Wörter des Seiteninhaltes, durch Kommas getrennt.
- `referrer`: steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden:

  <table class="standard-table">
    <caption>
      Werte für das
      <code>content</code>
      -Attribut von
      <code>&#x3C;meta name="referrer"></code>
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>Kein HTTP-{{httpheader("Referer")}}-Header senden.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Die [origin](/de/docs/Glossary/origin) des Dokuments senden.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Die vollständige URL senden, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), jedoch keinen Referrer senden, wenn es weniger sicher
          ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleichherkömmliche Anfragen senden,
          aber nur die Origin für andere Fälle.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleichherkömmliche Anfragen senden.
          Bei cross-origin Anfragen wird kein Referrer-Header enthalten sein.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Die Origin senden, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), jedoch keinen Referrer senden, wenn es weniger sicher
          ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleichherkömmliche Anfragen senden.
          Die Origin senden, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS). Andernfalls keinen Referrer senden.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleichherkömmliche oder
          cross-origin Anfragen senden.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Verhalten des Referrers unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält ein gültiges CSS-{{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Medienabfrageliste kann eingeschlossen werden, um das Medium festzulegen, auf das sich die Metadaten zur Themafarbe beziehen.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser verwendet diese Informationen zusammen mit den Einstellungen des Benutzers oder des Geräts, um zu bestimmen, welche Farben für alles vom Hintergrund und den Vordergründen bis hin zu Formularelementen und Bildlaufleisten verwendet werden sollen. Der Hauptverwendungszweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität mit—und die Präferenzreihenfolge für—helle und dunkle Farbmodi anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Ein oder mehrere vom Dokument unterstützte Farbschemata. Das mehrfache Spezifizieren desselben Farbschemas hat denselben Effekt wie das einmalige Spezifizieren. Mehrere Farbschemata anzugeben bedeutet, dass das erste Schema vom Dokument bevorzugt wird, aber das zweite angegebene Schema akzeptabel ist, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokuments in den Dunkelmodus zu rendern, ohne wirklich damit kompatibel zu sein, zu unleserlichem Inhalt führen kann; alle wichtigen Browser verwenden den Hellmodus, wenn nichts anderes konfiguriert ist.

  Um beispielsweise anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch im Hellmodus funktionsfähig gerendert wird:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene genauso, wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft einzelnen Elementen die Angabe ihrer bevorzugten und akzeptierten Farbschemata ermöglicht. Ihre Styles können sich dem aktuellen Farbschema mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-CSS-Medienfunktion anpassen.

### Standardmetadaten-Namen definiert in anderen Spezifikationen

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadaten-Namen:

- `viewport`: gibt Hinweise zur Größe der anfänglichen Größe des [Viewports](/de/docs/Glossary/viewport).

  <table class="fullwidth-table">
    <caption>
      Werte für den Inhalt von
      <code>&#x3C;meta name="viewport"></code>
    </caption>
    <thead>
      <tr>
        <th scope="col">Wert</th>
        <th scope="col">Mögliche Unterwerte</th>
        <th scope="col">Beschreibung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>width</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-width</code></td>
        <td>
          Definiert die Pixelbreite des Viewports, bei dem Sie möchten, dass die Website gerendert wird.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Viewports. Wird von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code> im
          Hochformat oder <code>device-height</code> im Querformat) und der
          Viewport-Größe.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das maximale Maß zum Vergrößern. Es muss größer oder gleich
          dem <code>minimum-scale</code> sein, sonst ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Mindestmaß zum Vergrößern. Es muss kleiner oder gleich
          dem <code>maximum-scale</code> sein, sonst ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer die Webseite nicht vergrößern.
          Der Standardwert ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren,
          und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst nicht das anfängliche Layout
            des Viewports, und die gesamte Webseite ist sicht(bar.
          </p>
          <p>
            Der Wert <code>contain</code> bewirkt, dass der Viewport skaliert wird, um innerhalb des größten eingeschriebenen Rechtecks innerhalb der Anzeige zu passen.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass der Viewport so skaliert wird, dass er die Geräteanzeige ausfüllt. Es wird dringend empfohlen, die
            <a href="/de/docs/Web/CSS/env">Sicherheitsbereich-Variablen</a> zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb der Anzeige endet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren der Vergrößerungsfähigkeiten durch das Setzen von `user-scalable` auf einen Wert von `no` verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können.
  >
  > - [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Weitere Metadaten-Namen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine umfangreiche Liste von nicht standardmäßigen Metadatennamen, die noch nicht formell akzeptiert wurden; jedoch werden einige der dort enthaltenen Namen bereits in der Praxis häufig verwendet, einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, wie z.B. eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler von Google) befolgt.
- `publisher`: der Name des Verlegers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Roboter" auf der Seite verwenden sollen. Es handelt sich um eine durch Kommas getrennte Liste der folgenden Werte:

  | Wert           | Beschreibung                                                                                     | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Ermöglicht dem Roboter, die Seite zu indexieren (Standard).                                      | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Roboter auf, die Seite nicht zu indexieren.                                          | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Ermöglicht dem Roboter, den Links auf der Seite zu folgen (Standard).                            | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                                | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Entspricht `index, follow`.                                                                      | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Entspricht `noindex, nofollow`.                                                                  | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, den Seiteninhalt nicht zu zwischenspeichern.                       | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige jeglicher Beschreibung der Seite in den Suchmaschinenergebnissen.         | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert an, dass diese Seite nicht als die verweisende Seite eines indizierten Bildes erscheint. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym von `noarchive`.                                                                         | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, dass E-Mail-Sammler mit ihnen verhindert werden.
  > - Der Roboter muss die Seite trotzdem aufrufen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu vermeiden, überlegen Sie, ob die Verwendung einer _[robots.txt](/de/docs/Glossary/robots.txt)_-Datei besser geeignet ist.
  > - Der `robots`-`<meta>`-Tag und die `robots.txt`-Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht die Indexierung oder anderes Verhalten, das durch `robots`-Meta gesteuert wird. Eine Seite, die nicht gecrawlt werden kann, kann trotzdem indiziert werden, wenn sie durch ein anderes Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, jedoch erst, wenn der Roboter die Seite erneut besucht. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Roboter, wie Google, Yahoo und Bing, unterstützen dieselben Werte für den HTTP-Header `X-Robots-Tag`; dies ermöglicht es nicht-HTML-Dokumenten wie Bildern, diese Regeln zu verwenden.

<!-- ## Technical summary -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element) in [Was befindet sich im Kopf? Metadaten in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
