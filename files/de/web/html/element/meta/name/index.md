---
title: Standard-Metadatennamen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: 81c67156fef5fb82c439c8f0d8ce6d4dee86a3e3
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadatennamen angibt und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert angibt.

### Standard-Metadatennamen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Menge von Standard-Metadatennamen:

- `application-name`: der Name der Anwendung, die auf der Webseite läuft.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einfache Webseiten sollten keinen Anwendungsnamen definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und präzise Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: der Bezeichner der Software, die die Seite erstellt hat.
- `keywords`: Wörter, die für den Inhalt der Seite relevant sind, getrennt durch Kommas.
- `referrer`: steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden:

  <table class="standard-table">
    <caption>
      Werte für das
      <code>content</code>
      Attribut von
      <code>&#x3C;meta name="referrer"></code>
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>Keinen HTTP-{{httpheader("Referer")}}-Header senden.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Den [origin](/de/docs/Glossary/origin) des Dokuments senden.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Die vollständige URL senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referer senden, wenn es weniger sicher
          ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-origin Anfragen senden, aber
          nur den origin in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-origin Anfragen senden.
          Cross-origin Anfragen enthalten keinen Referer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Den origin senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referer senden, wenn es weniger sicher
          ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-origin Anfragen senden.
          Den origin senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS). Andernfalls keinen Referer senden.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-origin oder
          Cross-origin Anfragen senden.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Dynamisches Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referer-Verhalten unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält ein gültiges CSS-{{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Media-Query-Liste kann enthalten sein, um das Medium festzulegen, auf das die Theme-Farbmetadaten angewendet werden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser wird diese Informationen zusammen mit den Browser- oder Geräteeinstellungen des Benutzers verwenden, um festzulegen, welche Farben für alles vom Hintergrund und Vordergrund bis hin zu Formularsteuerelementen und Scrollleisten zu verwenden sind. Der primäre Verwendungszweck für `<meta name="color-scheme">` besteht darin, die Kompatibilität mit – und die Reihenfolge der Präferenz für – helle und dunkle Farbmodi anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Ein oder mehrere vom Dokument unterstützte Farbschemata. Das gleiche Farbschema mehrmals anzugeben, hat die gleiche Wirkung wie es nur einmal anzugeben. Mehrere Farbschemata anzugeben bedeutet, dass das erste Schema vom Dokument bevorzugt, das zweite angegeben Schema jedoch akzeptabel ist, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Gemäß der Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen des Renderns eines Dokuments im dunklen Modus, wenn es nicht wirklich kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser standardisieren auf den hellen Modus, wenn nicht anders konfiguriert.

  Zum Beispiel, um anzugeben, dass ein Dokument den dunklen Modus bevorzugt, aber auch im hellen Modus funktional rendert:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene auf die gleiche Weise, wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft es einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Stile können sich an das aktuelle Farbschema mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-CSS-Media-Feature anpassen.

### Standard-Metadatennamen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadatennamen:

- `viewport`: gibt Hinweise zur Größe der anfänglichen Größe des [viewports](/de/docs/Glossary/viewport).

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
          Definiert die Pixelbreite des Viewports, in dem die Website gerendert werden soll.
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
          Viewportgröße.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert, auf welches Maximum herangezoomt werden kann. Es muss größer oder gleich
          dem <code>minimum-scale</code> sein oder das Verhalten ist undefiniert. Browsereinstellungen
          können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das minimale Zoomniveau. Es muss kleiner oder gleich
          dem <code>maximum-scale</code> sein oder das Verhalten ist undefiniert. Browsereinstellungen
          können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite hineinzoomen.
          Der Standard ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren,
          und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der <code>auto</code>-Wert hat keine Auswirkungen auf das anfängliche Layout
            Viewport und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der <code>contain</code>-Wert bedeutet, dass der Viewport so skaliert wird,
            dass das größte Rechteck, das in die Anzeige eingeschrieben ist, passt.
          </p>
          <p>
            Der <code>cover</code>-Wert bedeutet, dass der Viewport so skaliert wird, dass
            die Gerätedisplay gefüllt wird. Es wird dringend empfohlen, die
            <a href="/de/docs/Web/CSS/env">safe area inset</a>-Variablen zu verwenden, um
            sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays landet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren der Zoom-Fähigkeiten durch Festlegen von `user-scalable` auf einen Wert von `no` verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können.
  >
  > - [MDN Understanding WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Erklärung des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Andere Metadatennamen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl nicht standardisierter Metadatennamen, die noch nicht formell akzeptiert wurden; einige der dort enthaltenen Namen werden jedoch bereits häufig verwendet — einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, wie zum Beispiel eine Organisation oder Institution. Wenn es mehr als einen gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot befolgt (dem Indexierungscrawler für Google).
- `publisher`: der Name des Herausgebers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Robots" mit der Seite verwenden sollten. Es ist eine durch Kommas getrennte Liste der unten aufgeführten Werte:

  | Wert          | Beschreibung                                                                | Verwendet von                                                                                                                                                                                                                                             |
  | ------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`       | Erlaubt dem Robot, die Seite zu indexieren (Standard).                       | Alle                                                                                                                                                                                                                                                       |
  | `noindex`     | Fordert den Robot auf, die Seite nicht zu indexieren.                        | Alle                                                                                                                                                                                                                                                       |
  | `follow`      | Erlaubt dem Robot, den Links auf der Seite zu folgen (Standard).             | Alle                                                                                                                                                                                                                                                       |
  | `nofollow`    | Fordert den Robot auf, den Links auf der Seite nicht zu folgen.              | Alle                                                                                                                                                                                                                                                       |
  | `all`         | Entspricht `index, follow`.                                                  | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                             |
  | `none`        | Entspricht `noindex, nofollow`.                                              | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                             |
  | `noarchive`   | Fordert die Suchmaschine auf, den Seiteninhalt nicht im Cache zu speichern.  | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`   | Verhindert die Anzeige einer Beschreibung der Seite in den Suchergebnissen.  | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex`| Fordert auf, diese Seite nicht als verweisende Seite eines indizierten Bilds anzuzeigen. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`     | Synonym für `noarchive`.                                                     | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Robots befolgen diese Regeln. Erwarten Sie nicht, dass Sie damit E-Mail-Erntemaschinen verhindern.
  > - Der Robot muss immer noch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu verhindern, überlegen Sie, ob die Verwendung einer _[robots.txt](/de/docs/Glossary/robots.txt)_-Datei angemessener ist.
  > - Das `robots`-`<meta>`-Tag und die `robots.txt`-Datei haben unterschiedliche Zwecke: `robots.txt` steuert das Crawlen von Seiten und beeinflusst weder das Indexieren noch andere Verhaltensweisen, die durch `robots` meta gesteuert werden. Eine Seite, die nicht gecrawlt werden kann, kann trotzdem indiziert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber nur nachdem der Robot die Seite erneut besucht. Vergewissern Sie sich, dass die `robots.txt`-Datei Wiederbesuche nicht verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Robots undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Robots, wie Google, Yahoo und Bing, unterstützen die gleichen Werte für den HTTP-Header `X-Robots-Tag`; dies ermöglicht es anderen Dokumenttypen als HTML, wie Bildern, diese Regeln zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element) in [Was gehört in den Kopf? Metadaten in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
