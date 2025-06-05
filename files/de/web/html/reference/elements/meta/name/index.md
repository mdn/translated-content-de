---
title: Standardmetadaten-Namen
slug: Web/HTML/Reference/Elements/meta/name
l10n:
  sourceCommit: 40196f459e8b57ec474255652e8174d99cd9714b
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann zur Bereitstellung von Dokumentmetadaten in Form von Name-Wert-Paaren verwendet werden, wobei das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut den Metadaten-Namen angibt und das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut den Wert angibt.

### In der HTML-Spezifikation definierte Standardmetadaten-Namen

Die HTML-Spezifikation definiert den folgenden Satz von Standardmetadaten-Namen:

- `application-name`: der Name der Anwendung, die auf der Webseite läuft.

Um Übersetzungen bereitzustellen, verwenden Sie mehrere `<meta>`-Tags mit dem `lang`-Attribut für jede Sprache:

```html
<!-- English name -->
<meta name="application-name" content="Weather Wizard" lang="en" />

<!-- Spanish translation -->
<meta name="application-name" content="Mago del Clima" lang="es" />
```

> [!NOTE]
>
> - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentennamen oder einen Status enthalten kann.
> - Einzelne Webseiten sollten keinen `application-name` definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und präzise Zusammenfassung des Seiteninhalts. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: der Bezeichner der Software, die die Seite generiert hat.
- `keywords`: Wörter, die für den Inhalt der Seite relevant sind und durch Kommas getrennt sind.
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
        <td>Sendet den {{Glossary("origin", "origin")}} des Dokuments.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Sendet die vollständige URL, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), aber sendet keinen Referrer, wenn es weniger
          sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für gleichartige Anfragen, aber
          sendet nur den Ursprung in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für gleichartige Anfragen.
          Fremdartige Anfragen enthalten keinen Referrer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Sendet den Ursprung, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS), aber sendet keinen Referrer, wenn es weniger
          sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für gleichartige Anfragen.
          Sendet den Ursprung, wenn das Ziel mindestens so sicher wie die
          aktuelle Seite ist (HTTP(S)→HTTPS). Andernfalls sendet es keinen Referrer.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für gleichartige oder
          fremdartige Anfragen.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält eine gültige CSS {{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Medienabfrageliste kann einbezogen werden, um das Medium festzulegen, auf das die Themenfarbmetadaten Anwendung finden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: spezifiziert eines oder mehrere Farbschemen, mit denen das Dokument kompatibel ist.

  Der Browser nutzt diese Informationen zusammen mit den Einstellungen des Browsers oder Geräts des Benutzers, um zu bestimmen, welche Farben für alles, von Hintergrund und Vordergrund bis zu Formularelementen und Bildlaufleisten, verwendet werden sollen. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität mit—and die Rangfolge für—helle und dunkle Farbschemata anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Eines oder mehrere Farbschemata, die vom Dokument unterstützt werden. Das gleiche Farbschema mehrfach anzugeben, hat den gleichen Effekt wie es nur einmal anzugeben. Die Angabe mehrerer Farbschemata gibt an, dass das erste Schema vom Dokument bevorzugt wird, aber dass das zweite angegebene Schema akzeptabel ist, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den Lichtmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokuments, im Dunkelmodus gerendert zu werden, wenn es tatsächlich nicht kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser wechseln standardmäßig in den Lichtmodus, wenn nicht anders konfiguriert.

  Zum Beispiel, um anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch funktionell im Lichtmodus rendert:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene genauso wie die CSS {{cssxref("color-scheme")}}-Eigenschaft einzelnen Elementen erlaubt, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Stile können sich an das aktuelle Farbschema anpassen, indem sie die CSS-Media-Abfrage-Funktion {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} verwenden.

### Standardmetadaten-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadaten-Namen:

- `viewport`: gibt Hinweise auf die Größe der anfänglichen Größe des {{Glossary("viewport", "viewports")}}.

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
          Definiert die Pixelbreite des Viewports, bei der die Webseite gerendert werden soll.
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
          Definiert den maximalen Zoomlevel. Er muss größer oder gleich dem
          <code>minimum-scale</code> sein oder das Verhalten ist undefiniert. Browser-
          Einstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das minimale Zoom-Level. Es muss kleiner oder gleich dem
          <code>maximum-scale</code> sein oder das Verhalten ist undefiniert. Browser-
          Einstellungen können diese Regel ignorieren und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite zoomen.
          Der Standard ist <code>yes</code>. Browser-Einstellungen können diese Regel ignorieren
          und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der <code>auto</code>-Wert beeinflusst das anfängliche Layout-Viewport nicht,
            und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der <code>contain</code>-Wert bedeutet, dass der Viewport skaliert ist,
            um das größte Rechteck innerhalb des Displays einzupassen.
          </p>
          <p>
            Der <code>cover</code>-Wert bedeutet, dass der Viewport skaliert ist, um
            das Gerätedisplay auszufüllen. Es wird dringend empfohlen, die
            <a href="/de/docs/Web/CSS/env">sicheren Bereichsvariablen</a> zu verwenden, um
            sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays landet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren von Zoomfähigkeiten durch das Setzen von `user-scalable` auf `no` verhindert, dass Menschen mit Sehbehinderungen in der Lage sind, den Seiteninhalt zu lesen und zu verstehen.
  >
  > - [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Andere Metadaten-Namen

#### Im WHATWG MetaExtensions-Wiki definierte Namen

Die [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl von nicht standardmäßigen Metadaten-Namen, die noch nicht formell akzeptiert wurden; einige der dort aufgeführten Namen werden jedoch bereits häufig in der Praxis verwendet — einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, zum Beispiel eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot (dem Indexierungs-Crawler für Google) befolgt.
- `publisher`: der Name des Herausgebers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite verwenden sollten. Es ist eine durch Kommata getrennte Liste der folgenden Werte:

  | Wert           | Beschreibung                                                                             | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Erlaubt es dem Roboter, die Seite zu indexieren (Standard).                              | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Roboter auf, die Seite nicht zu indexieren.                                  | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Erlaubt es dem Roboter, den Links auf der Seite zu folgen (Standard).                    | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                        | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Entspricht `index, follow`                                                               | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Entspricht `noindex, nofollow`                                                           | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, das Seiteninhalts nicht zu zwischenspeichern.              | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige einer Beschreibung der Seite in Suchmaschinenergebnissen.         | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert an, dass diese Seite nicht als Referenzseite eines indizierten Bildes erscheint. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym für `noarchive`.                                                                 | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, E-Mail-Sammler mit diesen zu verhindern.
  > - Der Roboter muss trotzdem auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreitennutzung zu verhindern, sollten Sie überlegen, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_ Datei angemessener ist.
  > - Das `<meta name="robots">`-Element und die `robots.txt`-Datei dienen verschiedenen Zwecken: `robots.txt` steuert das Crawlen von Seiten, beeinflusst jedoch nicht die Indexierung oder anderes, das durch `robots` meta gesteuert wird. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indiziert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber nur, nachdem der Roboter die Seite erneut besucht. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte sind gegenseitig ausgeschlossen, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Roboter wie Google, Yahoo und Bing unterstützen dieselben Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es, dass Nicht-HTML-Dokumente wie Bilder diese Regeln verwenden.

#### Andere Namen

- `application-title`: Wird verwendet, um die Titelleiste einer App für Webanwendungen anzupassen, die als eigenständige Anwendungen auf unterstützenden Desktop-Betriebssystemen installiert sind. Während der Textinhalt des {{HTMLElement("title")}}-Elements normalerweise in Browser-Tabs angezeigt wird, wenn die App in einem Browser läuft, kann der `application-title`-Metadatenname verwendet werden, um einen anderen Titel für die Anwendung festzulegen, wenn sie als eigenständige, installierte App läuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
