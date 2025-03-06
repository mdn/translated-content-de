---
title: Standard-Metadaten-Namen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadaten-Namen und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert angibt.

### Standard-Metadaten-Namen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert den folgenden Satz von Standard-Metadaten-Namen:

- `application-name`: der Name der Anwendung, die auf der Webseite läuft.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentennamen oder einen Status enthalten kann.
  > - Einfache Webseiten sollten keinen Anwendung-Namen definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und präzise Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: der Identifikator der Software, die die Seite generiert hat.
- `keywords`: für den Inhalt der Seite relevante Wörter, getrennt durch Kommas.
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
        <td>Die {{Glossary("origin", "Herkunft")}} des Dokuments senden.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Die volle URL senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referrer senden, wenn es weniger sicher ist
          (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Die volle URL (ohne Parameter) für gleichoriginäre Anfragen senden, aber
          nur die Herkunft für andere Fälle senden.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Die volle URL (ohne Parameter) für gleichoriginäre Anfragen senden.
          Fremdherkunft-Anfragen werden keinen Referrer-Header enthalten.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Die Herkunft senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referrer senden, wenn es weniger sicher ist
          (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Die volle URL (ohne Parameter) für gleichoriginäre Anfragen senden.
          Die Herkunft senden, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS). Andernfalls keinen Referrer senden.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Die volle URL (ohne Parameter) für gleichoriginäre oder
          fremdherkunft-Anfragen senden.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um das Erscheinungsbild der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält eine gültige CSS-{{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Media-Query-Liste kann aufgenommen werden, um festzulegen, auf welche Medien die Metadaten der Themenfarbe angewendet werden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt eine oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser verwendet diese Information in Verbindung mit den Einstellungen des Browsers oder Geräts des Benutzers, um zu bestimmen, welche Farben für alles von Hintergründen und Vordergründen bis zu Formularelementen und Scrollbars verwendet werden sollen. Die Hauptverwendung von `<meta name="color-scheme">` ist die Angabe der Kompatibilität mit und der Präferenzreihenfolge für helle und dunkle Farbmodi.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich seiner Farbschemata nicht bewusst und sollte mit der Standardfarbenpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Ein oder mehrere vom Dokument unterstützte Farbschemata. Das gleiche Farbschema mehr als einmal anzugeben, hat denselben Effekt, als hätte man es nur einmal angegeben. Mehrere Farbschemata anzugeben bedeutet, dass das erste Schema vom Dokument bevorzugt wird, aber dass das zweite angegebene Schema akzeptabel ist, falls der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokuments, im dunklen Modus zu rendern, wenn es nicht wirklich kompatibel damit ist, zu unlesbarem Inhalt führen kann; alle großen Browser verwenden standardmäßig den hellen Modus, wenn nicht anders konfiguriert.

  Zum Beispiel, um anzuzeigen, dass ein Dokument den dunklen Modus bevorzugt, aber auch im hellen Modus funktional gerendert wird:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene genauso wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft es einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Styles können sich an das aktuelle Farbschema anpassen, indem die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-CSS-Media-Funktion verwendet wird.

### Standard-Metadaten-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadaten-Namen:

- `viewport`: gibt Hinweise zur Größe der Anfangsgröße des {{Glossary("viewport", "Ansichtsfensters")}}.

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
          Definiert die Pixelbreite des Ansichtsfensters, bei der Sie möchten,
          dass die Webseite gerendert wird.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Ansichtsfensters. Wird von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code> im
          Hochformat oder <code>device-height</code> im Querformat) und der
          Ansichtsfenstergröße.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert den maximalen Zoomfaktor. Er muss größer oder gleich dem
          <code>minimum-scale</code> sein, sonst ist das Verhalten nicht definiert.
          Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das minimale Zoomniveau. Es muss kleiner oder gleich dem
          <code>maximum-scale</code> sein, sonst ist das Verhalten nicht definiert.
          Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite hineinzoomen.
          Die Standardeinstellung ist <code>yes</code>. Browsereinstellungen können diese Regel
          ignorieren, und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst das anfängliche Layout-
            Ansichtsfenster nicht, und die gesamte Webseite wird angezeigt.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass das Ansichtsfenster auf
            das größte in das Display eingeschriebene Rechteck skaliert wird.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass das Ansichtsfenster skaliert wird,
            um das Display des Geräts auszufüllen. Es wird dringend empfohlen,
            die <a href="/de/docs/Web/CSS/env">sicheren Bereich</a> Variablen
            zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb
            des Displays endet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Wenn Sie die Zoomfähigkeiten deaktivieren, indem Sie `user-scalable` auf einen Wert von `no` setzen, verhindern Sie, dass Menschen mit Sehbehinderungen in der Lage sind, den Seiteninhalt zu lesen und zu verstehen.
  >
  > - [MDN Verstehen WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Andere Metadaten-Namen

#### Namen, die im WHATWG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge an nicht standardisierten Metadaten-Namen, die noch nicht formell akzeptiert wurden; jedoch sind einige der dort enthaltenen Namen bereits recht gebräuchlich in der Praxis – einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, wie z.B. eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur vom Googlebot (dem Indexierungssystem für Google) befolgt.
- `publisher`: der Name des Herausgebers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Robots" mit der Seite verwenden sollten. Es ist eine kommagetrennte Liste der folgenden Werte:

  | Wert           | Beschreibung                                                                                  | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Erlaubt dem Robot, die Seite zu indexieren (Standard).                                        | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Robot auf, die Seite nicht zu indexieren.                                         | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Erlaubt dem Robot, den Links auf der Seite zu folgen (Standard).                              | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Robot auf, den Links auf der Seite nicht zu folgen.                               | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Entspricht `index, follow`                                                                    | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Entspricht `noindex, nofollow`                                                                | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, den Seiteninhalt nicht zwischenzuspeichern.                     | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige einer Beschreibung der Seite in den Suchergebnissen.                   | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert auf, dass diese Seite nicht als verweisende Seite eines indexierten Bildes erscheint. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym für `noarchive`.                                                                      | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Robots befolgen diese Regeln. Erwarten Sie nicht, dass Sie E-Mail-Sammler damit aufhalten können.
  > - Der Robot muss die Seite dennoch aufrufen, um diese Regeln zu lesen. Um den Bandbreitenverbrauch zu vermeiden, überlegen Sie, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_-Datei besser geeignet ist.
  > - Das `<meta name="robots">`-Element und die `robots.txt`-Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht das Indexieren oder anderes durch `robots`-Meta kontrolliertes Verhalten. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber nur, nachdem der Robot die Seite erneut besucht. Stellen Sie sicher, dass die `robots.txt`-Datei erneute Besuche nicht verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Robots nicht definiert und kann zwischen ihnen variieren.
  > - Einige Crawler-Robots, wie Google, Yahoo und Bing, unterstützen dieselben Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es nicht-HTML-Dokumenten wie Bildern, diese Regeln zu verwenden.

#### Andere Namen

- `application-title`: Wird verwendet, um die Titelleiste einer App für Webanwendungen anzupassen, die als eigenständige Apps auf unterstützenden Desktop-Betriebssystemen installiert sind. Während der Textinhalt des {{HTMLElement("title")}}-Elements normalerweise in den Browser-Tabs angezeigt wird, wenn die App in einem Browser läuft, kann der `application-title`-Metadatenname verwendet werden, um einen anderen Titel für die Anwendung festzulegen, wenn sie als eigenständig installierte App läuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
