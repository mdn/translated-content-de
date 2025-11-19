---
title: OpenSearch Beschreibungsformat
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **[OpenSearch Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, selbst eine Suchmaschine zu deklarieren, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine verwenden kann. OpenSearch wird zumindest von Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zu Dokumentationen anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z.B. Suchvorschläge. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Suchmaschinen zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

## Übersicht

Die Adressleiste in Browsern hat eine doppelte Funktion: Sie können eine URL eingeben, um direkt zu einer Website zu gelangen, oder Sie können einen Suchbegriff eingeben, um eine Suchmaschine anzufragen. Die Suchmaschine liefert eine Liste von Ergebnissen, die Sie direkt durchsuchen können, oder Sie können die vollständige Ergebnisseite der Suchmaschine öffnen.

Standardmäßig können Browser einige beliebte Suchmaschinen wie Google, Bing oder Yandex verbinden. Das OpenSearch-Protokoll erlaubt es Websites, ihre eigenen Suchmaschinen zu definieren, sodass Benutzer diese Websites direkt von der Adressleiste des Browsers durchsuchen können. Beispielsweise hat die MDN-Website eine siteweite Suchmaschine. Wenn sich MDN als Suchmaschine registriert, können Benutzer MDN direkt aus der Adressleiste durchsuchen.

Browser fragen eine Suchmaschine an, indem sie eine URL anfordern. Die Seite definiert eine Vorlage für die anzufordernde URL, und der Browser füllt die Suchbegriffe des Benutzers in die angegebenen Platzhalter ein. Wenn die Suchmaschinen-URL beispielsweise `https://example.com/search?q={searchTerms}` ist, wird der Browser `https://example.com/search?q=foo` anfordern, wenn der Benutzer "foo" in die Adressleiste eingibt. Die Suchmaschine generiert dann eine Antwort — entweder eine Liste von Suchergebnissen oder eine vollständige Ergebnisseite.

Eine Website definiert ihre Suchmaschine, indem sie in ihrem HTML auf eine XML-Beschreibungsdatei verweist. Wenn der Benutzer die Seite zum ersten Mal besucht, erkennt der Browser diese Beschreibungsdatei und registriert die Suchmaschine. Der Browser verwendet dann die registrierte Suchmaschine, um Suchanfragen aus der Adressleiste zu verarbeiten.

> [!NOTE]
> Chrome registriert Site-Suchmaschinen standardmäßig als "inaktiv". Benutzer müssen jede Seite manuell in den Suchmaschineneinstellungen aktivieren.

## OpenSearch Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt dem untenstehenden Grundmuster. Abschnitte in _\[eckigen Klammern]_ sollten für Ihre spezielle Suchmaschine angepasst werden.

```xml
<OpenSearchDescription
  xmlns="http://a9.com/-/spec/opensearch/1.1/"
  xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er muss aus **16 oder weniger Zeichen** bestehen und reiner Text sein, ohne HTML oder andere Markup-Elemente.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss **1024 oder weniger Zeichen** reinen Textes enthalten, ohne HTML oder andere Markup-Elemente.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die verwendet wird, wenn Eingaben an die Suchmaschine übermittelt werden.
- Image
  - : URL eines Symbols für die Suchmaschine. Wenn möglich, fügen Sie ein 16×16 Bild vom Typ `image/x-icon` (wie z.B. `/favicon.ico`) und ein 64×64 Bild vom Typ `image/jpeg` oder `image/png` hinzu.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Reference/Schemes/data) verwenden. (Sie können eine `data:` URL aus einer Bilddatei mit [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox zwischenspeichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Suchplugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) im Ordner `searchplugins/` gespeichert). `http:` und `https:` URLs werden in `data:` URLs umgewandelt, wenn dies geschieht.

    > [!NOTE]
    > Für Symbole, die aus der Ferne geladen werden (d.h. von `https:` URLs im Gegensatz zu `data:` URLs), lehnt Firefox Symbole ab, die größer als **10 Kilobyte** sind.

    ![Suchvorschläge von Google, angezeigt im Suchfeld von Firefox](searchsuggestionsample.png)

- Url
  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden. Das Attribut `template` gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:
    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL für das Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Stichwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer im Suchfeld oder in der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter werden in [OpenSearch 1.1 parameters](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Verlinkung zur OpenSearch Beschreibungsdatei

Um die automatische Erkennung zu unterstützen, fügen Sie für jede Suchmaschine ein `<link>`-Element im `<head>` Ihrer Webseite hinzu:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[descriptionURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erklärt:

- `searchTitle`
  - : Der Name der Suche, die durchgeführt werden soll, z.B. "Search MDC" oder "Yahoo! Search". Dies muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- `descriptionURL`
  - : Die URL zur XML-Beschreibungsdatei, sodass der Browser sie herunterladen kann.

Wenn Ihre Website mehrere Suchmaschinen anbietet, können Sie die automatische Erkennung für alle unterstützen. Zum Beispiel:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

Auf diese Weise kann Ihre Website zwei Suchmaschinen anbieten: eine nach Autor und eine nach Titel.

> [!NOTE]
> In Firefox weist eine Änderung des Symbols im Suchfeld darauf hin, dass ein angebotenes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn ein Suchfeld nicht in der Benutzeroberfläche des Benutzers angezeigt wird, erhalten sie _keinen_ Hinweis. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung automatischer Updates für OpenSearch Beschreibung

Die OpenSearch-Beschreibungsdatei kann automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das Attribut `template` sollte die URL des OpenSearch-Dokuments sein, zu der automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url
  type="application/opensearchdescription+xml"
  rel="self"
  template="https://example.com/mysearchdescription.xml" />
```

## Tipps zur Fehlerbehebung

Wenn ein Fehler in Ihrer XML-Beschreibungsdatei vorhanden ist, könnten beim Hinzufügen der Suchmaschine Fehler auftreten. Wenn die Fehlermeldung nicht hilfreich ist, verwenden Sie die folgenden Tipps zur Fehlerbehebung:

- Überprüfen Sie, ob Ihr Server OpenSearch-Beschreibungen mit `Content-Type: application/opensearchdescription+xml` bereitstellt.
- Stellen Sie sicher, dass Ihre XML-Beschreibungsdatei wohlgeformt ist. Sie können dies überprüfen, indem Sie die Datei direkt in einen Browser laden. Und-Zeichen (`&`) in der `template` URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem abschließenden Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Stellen Sie sicher, dass das `xmlns`-Attribut enthalten ist — ohne es könnten Sie eine Fehlermeldung wie "Firefox konnte das Such-Plugin nicht herunterladen" bekommen.
- Sie **müssen** eine `text/html` URL einschließen — Suchmaschinen, die nur Atom- oder {{Glossary("RSS", "RSS")}}-URL-Typen enthalten (was gültig, aber von Firefox nicht unterstützt wird), werden ebenfalls den Fehler "konnte das Such-Plugin nicht herunterladen" erzeugen.
- Aus der Ferne abgerufene Favicons dürfen nicht größer als 10 KB sein (siehe [Firefox Bug 361923](https://bugzil.la/361923)).
- Wie bereits erwähnt, aktivieren Browser möglicherweise nicht automatisch die Suchkürzel für Websites. Überprüfen Sie die Einstellungen des Browsers und stellen Sie sicher, dass die Suchmaschine aktiviert ist.

Zusätzlich bietet der Suchplugin-Dienst einen Logging-Mechanismus, der möglicherweise hilfreich für Plugin-Entwickler ist. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann werden Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox angezeigt (Extras ➤ Browser-Tools ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Leitfaden: Entdeckung von Suchanbietern](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - OpenSearch-Plugins erstellen. [Benutzerdefinierte Suche durch Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
