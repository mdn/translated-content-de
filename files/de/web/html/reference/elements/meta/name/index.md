---
title: Standard-Metadaten-Namen
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokument-Metadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut den Metadaten-Namen angibt und das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut den Wert angibt.

### Standard-Metadaten-Namen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Menge von Standard-Metadaten-Namen:

- `application-name`: der Name der Anwendung, die auf der Webseite läuft.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einzelne Webseiten sollten keinen `application-name` definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und genaue Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: der Bezeichner der Software, die die Seite generiert hat.
- `keywords`: Wörter, die für den Inhalt der Seite relevant sind, durch Kommas getrennt.
- `referrer`: steuert den HTTP {{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden:

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
        <td>Keinen HTTP {{httpheader("Referer")}}-Header senden.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Die {{Glossary("origin", "origin")}} des Dokuments senden.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Die vollständige URL senden, wenn das Ziel mindestens ebenso sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referrer senden, wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-originäre Anfragen senden, aber nur die Origin in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-originäre Anfragen senden. Cross-Origin-Anfragen enthalten keinen Referrer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Die Origin senden, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), aber keinen Referrer senden, wenn es weniger sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-originäre Anfragen senden. Die Origin senden, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls, keinen Referrer senden.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Die vollständige URL (ohne Parameter) für gleich-originäre oder Cross-Origin-Anfragen senden.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten zur Anpassung der Anzeige der Seite oder der umliegenden Benutzeroberfläche verwenden sollten. Das `content`-Attribut enthält ein gültiges CSS {{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Medienabfrageliste kann eingeschlossen werden, um das Medium festzulegen, auf das die Theme-Farbe-Metadaten angewendet werden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt eine oder mehrere Farbpaletten an, mit denen das Dokument kompatibel ist.

  Der Browser wird diese Information zusammen mit den Benutzer- oder Geräteeinstellungen verwenden, um zu bestimmen, welche Farben von Hintergrund und Vordergrund bis hin zu Formularsteuerungen und Scrollleisten verwendet werden sollen. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität mit—und die Reihenfolge der Präferenz für—helle und dunkle Farbmodi anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich Farbpaletten nicht bewusst und sollte mit der Standardfarbpalette dargestellt werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Eine oder mehrere vom Dokument unterstützte Farbpaletten. Die Angabe derselben Farbpalette mehrmals hat den gleichen Effekt wie nur einmalige Angabe. Die Angabe mehrerer Farbpaletten gibt an, dass die erste Palette vom Dokument bevorzugt wird, die zweite jedoch akzeptabel ist, wenn der Benutzer es wünscht.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokumentes zur Anzeige im dunklen Modus, wenn es nicht wirklich damit kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser verwenden standardmäßig den hellen Modus, wenn nicht anders konfiguriert.

  Um beispielsweise anzuzeigen, dass ein Dokument den dunklen Modus bevorzugt, aber auch im hellen Modus funktional dargestellt wird:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene auf die gleiche Weise, wie die CSS {{cssxref("color-scheme")}}-Eigenschaft es einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbpaletten anzugeben. Ihre Stile können sich an das aktuelle Farbpaletten-Schema mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS Medien-Feature anpassen.

### Standard-Metadaten-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation Spezifikation definiert den folgenden Metadaten-Namen:

- `viewport`: gibt Hinweise auf die Größe der anfänglichen Größe des {{Glossary("viewport", "viewport")}}.

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
        <td>Eine positive ganze Zahl, oder der Text <code>device-width</code></td>
        <td>
          Definiert die Pixelbreite des Viewports, die Sie wünschen, dass die Webseite angezeigt wird.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive ganze Zahl, oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Viewports. Wird von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code> im Hochformat oder <code>device-height</code> im Querformat) und der Viewport-Größe.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Maximum, um das gezoomt werden kann. Es muss größer oder gleich dem <code>minimum-scale</code> sein, sonst ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert dies standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert den minimalen Zoomlevel. Es muss kleiner oder gleich dem <code>maximum-scale</code> sein, sonst ist das Verhalten undefiniert. Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert dies standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer die Webseite nicht vergrößern. Der Standard ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren, und iOS10+ ignoriert dies standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst nicht das anfängliche Layout des Viewports, und die ganze Webseite ist sichtbar.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass der Viewport skaliert wird, um das größte innerhalb des Anzeigegerätes eingezeichnete Rechteck anzuzeigen.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass der Viewport skaliert wird, um das Anzeigegerät auszufüllen. Es wird empfohlen, die [safe area inset](https://www.w3.org/TR/css-env-1/#env-function)-Variablen zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb des Bildschirms enden.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren von Zoom-Funktionen durch Setzen von `user-scalable` auf einen Wert von `no` verhindert, dass Personen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können.
  >
  > - [MDN Verstehen von WCAG, Richtlinie 1.4 erklärt](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Andere Metadaten-Namen

#### Im WHATWG MetaExtensions-Wiki definierte Namen

Die [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Menge nicht-standardisierter Metadaten-Namen, die noch nicht formell akzeptiert wurden; einige der enthaltenen Namen werden jedoch bereits in der Praxis häufig verwendet, einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, wie eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler von Google) befolgt.
- `publisher`: der Name des Verlegers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite verwenden sollen. Es ist eine durch Kommas getrennte Liste der folgenden Werte:

  | Wert          | Beschreibung                                                                                       | Verwendet von                                                                                                                                                                                                                                             |
  | ------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`       | Erlaubt dem Roboter, die Seite zu indexieren (Standard).                                           | Alle                                                                                                                                                                                                                                                      |
  | `noindex`     | Fordert den Roboter auf, die Seite nicht zu indexieren.                                            | Alle                                                                                                                                                                                                                                                      |
  | `follow`      | Erlaubt dem Roboter, den Links auf der Seite zu folgen (Standard).                                 | Alle                                                                                                                                                                                                                                                      |
  | `nofollow`    | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                                  | Alle                                                                                                                                                                                                                                                      |
  | `all`         | Äquivalent zu `index, follow`                                                                      | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                             |
  | `none`        | Äquivalent zu `noindex, nofollow`                                                                  | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                             |
  | `noarchive`   | Fordert die Suchmaschine auf, den Seiteninhalt nicht im Cache zu speichern.                        | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`   | Verhindert die Anzeige einer Beschreibung der Seite in Suchmaschinenergebnissen.                   | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert an, dass diese Seite nicht als verweisende Seite eines indexierten Bildes erscheint.      | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                     |
  | `nocache`     | Synonym für `noarchive`.                                                                          | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, damit E-Mail-Sammler zu verhindern.
  > - Der Roboter muss noch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu verhindern, überlegen Sie, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_ Datei angemessener ist.
  > - Das `<meta name="robots">` Element und die `robots.txt` Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht das Indexieren oder anderes Verhalten, das durch Meta-Robots gesteuert wird. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, wird `noindex` funktionieren, jedoch nur, nachdem der Roboter die Seite erneut besucht hat. Stellen Sie sicher, dass die `robots.txt` Datei keine erneuten Besuche verhindert.
  > - Einige Werte sind gegenseitig ausschließend, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann variieren.
  > - Einige Crawler-Roboter, wie Google, Yahoo und Bing, unterstützen die gleichen Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es auch Nicht-HTML-Dokumenten wie Bildern, diese Regeln zu nutzen.

#### Andere Namen

- `application-title`: Wird verwendet, um die Titelleiste einer App für Webanwendungen anzupassen, die als eigenständige Anwendungen auf unterstützenden Desktop-Betriebssystemen installiert sind. Während der Textinhalt des {{HTMLElement("title")}}-Elements normalerweise in Browser-Tabs angezeigt wird, wenn die App im Browser läuft, kann der Metadaten-Name `application-title` verwendet werden, um einen anderen Titel für die Anwendung festzulegen, wenn sie als eigenständige installierte App ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
