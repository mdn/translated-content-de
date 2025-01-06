---
title: Standard-Metadatennamen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokument-Metadaten in Form von Namens-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadatennamen angibt und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert.

### Standard-Metadatennamen, die in der HTML-Spezifikation definiert sind

Die HTML-Spezifikation definiert die folgende Liste von Standard-Metadatennamen:

- `application-name`: der Name der Anwendung, die auf der Webseite ausgeführt wird.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es unterscheidet sich vom {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einfache Webseiten sollten keinen Anwendungsnamen (`application-name`) definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und genaue Zusammenfassung des Inhalts der Seite. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: der Bezeichner der Software, die die Seite generiert hat.
- `keywords`: Wörter, die für den Inhalt der Seite relevant sind, getrennt durch Kommas.
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
        <td>Senden Sie keinen HTTP {{httpheader("Referer")}}-Header.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Senden Sie den {{Glossary("origin", "origin")}} des Dokuments.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Senden Sie die vollständige URL, wenn das Ziel mindestens genauso sicher
          wie die aktuelle Seite ist (HTTP(S)→HTTPS), senden Sie jedoch keinen
          Referrer, wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das
          Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Senden Sie die vollständige URL (ohne Parameter) für Same-Origin-Anfragen,
          senden Sie jedoch nur den Origin für andere Fälle.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Senden Sie die vollständige URL (ohne Parameter) für Same-Origin-Anfragen.
          Cross-Origin-Anfragen enthalten keinen Referrer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Senden Sie den Origin, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), senden Sie jedoch keinen Referrer, wenn
          es weniger sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Senden Sie die vollständige URL (ohne Parameter) für Same-Origin-Anfragen.
          Senden Sie den Origin, wenn das Ziel mindestens so sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS). Andernfalls senden Sie keinen Referrer.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Senden Sie die vollständige URL (ohne Parameter) für Same-Origin- oder
          Cross-Origin-Anfragen.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Verhalten des Referrers unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): gibt eine empfohlene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält eine gültige CSS-Farbe {{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Media-Query-Liste kann enthalten sein, um das Medium festzulegen, auf das die Theme-Farben-Metadaten angewendet werden.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt ein oder mehrere Farbschemata an, mit denen das Dokument kompatibel ist.

  Der Browser wird diese Informationen zusammen mit den Einstellungen des Benutzers im Browser oder Gerät verwenden, um zu bestimmen, welche Farben für alles verwendet werden, von Hintergrund und Vordergrund bis hin zu Formularelementen und Scrollleisten. Der Hauptverwendungszweck für `<meta name="color-scheme">` besteht darin, die Kompatibilität mit - und die Präferenzreihenfolge für - helle und dunkle Farbmodi anzugeben.

  Der Wert der [`content`](/de/docs/Web/HTML/Element/meta#content)-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument ist sich der Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Ein oder mehrere Farbschemata werden vom Dokument unterstützt. Das mehrmalige Angeben desselben Farbschemas hat denselben Effekt wie das einmalige Angeben. Das Angeben mehrerer Farbschemata zeigt an, dass das Dokument das erste Schema bevorzugt, das zweite angegebene Schema jedoch akzeptiert, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den Lichtmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da das Erzwingen eines Dokuments in den Dunkelmodus, wenn es nicht wirklich damit kompatibel ist, zu unlesbarem Inhalt führen kann; alle gängigen Browser wechseln standardmäßig in den Lichtmodus, wenn sie nicht anders konfiguriert sind.

  Zum Beispiel, um anzuzeigen, dass ein Dokument den Dunkelmodus bevorzugt, aber auch im Lichtmodus funktional dargestellt wird:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentenebene auf die gleiche Weise, wie es die CSS {{cssxref("color-scheme")}}-Eigenschaft einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbschemata anzugeben. Ihre Stile können sich an das aktuelle Farbschema anpassen, indem Sie die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS-Media-Feature verwenden.

### Standard-Metadatennamen, die in anderen Spezifikationen definiert sind

Die Spezifikation zur CSS-Geräteanpassung definiert den folgenden Metadatennamen:

- `viewport`: gibt Hinweise auf die Größe des anfänglichen Viewports {{Glossary("viewport", "viewport")}}.

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
          Definiert die Pixelbreite des Viewports, bei der Sie möchten, dass die
          Webseite gerendert wird.
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
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code>
          im Hochformat oder <code>device-height</code> im Querformat) und der
          Viewport-Größe.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert die maximale Vergrößerung. Sie muss größer oder gleich der
          <code>minimum-scale</code> sein, andernfalls ist das Verhalten nicht
          definiert. Browsereinstellungen können diese Regel ignorieren, und iOS10+
          ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert die minimale Zoomstufe. Sie muss kleiner oder gleich der
          <code>maximum-scale</code> sein, andernfalls ist das Verhalten nicht
          definiert. Browsereinstellungen können diese Regel ignorieren, und iOS10+
          ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer die Webseite nicht
          vergrößern. Der Standardwert ist <code>yes</code>. Browsereinstellungen
          können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst das anfängliche Layout
            des Viewports nicht und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass der Viewport skaliert wird,
            um das größte innerhalb des Displays eingeschriebene Rechteck zu passen.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass der Viewport skaliert wird,
            um das Gerätedisplay vollständig zu füllen. Es wird dringend empfohlen,
            die <a href="/de/docs/Web/CSS/env">Sicherheitsbereichs-Einfügevariablen</a>
            zu verwenden, um sicherzustellen, dass wichtiger Inhalt
            nicht außerhalb des Displays endet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Die Deaktivierung der Zoomfunktionalität, indem `user-scalable` auf `no` gesetzt wird, hindert Menschen mit Sehbehinderungen daran, den Seiteninhalt zu lesen und zu verstehen.
  >
  > - [MDN Verständnis von WCAG, Erklärungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Weitere Metadatennamen

Die [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl nicht standardisierter Metadatennamen, die noch nicht formell angenommen wurden; einige der dort enthaltenen Namen werden jedoch bereits häufig in der Praxis verwendet, einschließlich der folgenden:

- `creator`: der Name des Erstellers des Dokuments, wie eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym für `robots`, wird nur von Googlebot (dem Indizierungs-Crawler für Google) befolgt.
- `publisher`: der Name des Herausgebers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite verwenden sollten. Es ist eine durch Kommas getrennte Liste der folgenden Werte:

  | Wert           | Beschreibung                                                                              | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Erlaubt dem Roboter, die Seite zu indizieren (Standard).                                  | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Roboter auf, die Seite nicht zu indizieren.                                   | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Erlaubt dem Roboter, die Links auf der Seite zu folgen (Standard).                        | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                         | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Entspricht `index, follow`                                                                | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Entspricht `noindex, nofollow`                                                            | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, den Seiteninhalt nicht zu cachen.                           | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige einer Beschreibung der Seite in den Suchergebnissen.               | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert, dass diese Seite nicht als verweisende Seite eines indexierten Bildes erscheint. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym von `noarchive`.                                                                  | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, damit E-Mail-Erntewerkzeuge zu verhindern.
  > - Der Roboter muss dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um den Bandbreitenverbrauch zu verhindern, prüfen Sie, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_-Datei angemessener ist.
  > - Das `<meta name="robots">`-Element und die `robots.txt`-Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht das Indizieren oder andere vom `robots`-Meta gesteuerte Verhaltensweisen. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indiziert werden, wenn auf sie von einem anderen Dokument verwiesen wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, jedoch erst, nachdem der Roboter die Seite erneut besucht hat. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Roboter wie Google, Yahoo und Bing unterstützen die gleichen Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es, dass auch Nicht-HTML-Dokumente wie Bilder diese Regeln verwenden.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>` tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
