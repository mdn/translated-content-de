---
title: OpenSearch-Beschreibungsformat
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 313c83728a417ff75a5e0af748e6648e06ce8556
---

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine verwenden kann. OpenSearch wird mindestens von Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zu Dokumentationen anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z.B. Suchvorschläge. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Suchmaschinen zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

## Überblick

Die Adressleiste in Browsern hat eine doppelte Funktion: Sie können eine URL eingeben, um direkt zu einer Seite zu gelangen, oder Sie können einen Suchbegriff eingeben, um eine Suchmaschine abzufragen. Die Suchmaschine liefert eine Liste von Ergebnissen, die Sie direkt durchsuchen können, oder Sie können die vollständige Ergebnisseite der Suchmaschine öffnen.

Standardmäßig können Browser mit einigen beliebten Suchmaschinen wie Google, Bing oder Yandex verbunden werden. Das OpenSearch-Protokoll ermöglicht es Websites, ihre eigenen Suchmaschinen zu definieren, wodurch Benutzer diese Websites direkt über die Adressleiste des Browsers durchsuchen können. Zum Beispiel hat die MDN-Website eine suchweite Suchmaschine. Wenn sich MDN als Suchmaschine registriert, können Benutzer MDN direkt über die Adressleiste durchsuchen.

Browser fragen eine Suchmaschine an, indem sie eine URL anfordern. Die Website definiert eine Vorlage für die anzufordernde URL, und der Browser füllt die Suchbegriffe des Benutzers in die angegebenen Platzhalter ein. Zum Beispiel, wenn die Suchmaschinen-URL `https://example.com/search?q={searchTerms}` ist, wird der Browser `https://example.com/search?q=foo` anfordern, wenn der Benutzer "foo" in die Adressleiste eingibt. Die Suchmaschine erstellt dann eine Antwort—entweder eine Liste von Suchergebnissen oder eine vollständige Suchergebnisseite.

Eine Website definiert ihre Suchmaschine, indem sie in ihrem HTML auf eine XML-Beschreibungsdatei verweist. Wenn der Benutzer die Seite zum ersten Mal besucht, erkennt der Browser diese Beschreibungsdatei und registriert die Suchmaschine. Der Browser verwendet dann die registrierte Suchmaschine, um Suchen aus der Adressleiste zu bearbeiten.

> [!NOTE]
> Chrome registriert Website-Suchmaschinen standardmäßig als "inaktiv". Benutzer müssen jede Website manuell in den Suchmaschinen-Einstellungen aktivieren.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der unten dargestellten Grundvorlage. Abschnitte in _\[eckigen Klammern]_ sollten für Ihre spezifische Suchmaschine angepasst werden.

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
  - : Ein kurzer Name für die Suchmaschine. Er muss aus **16 oder weniger Zeichen** einfachen Textes bestehen, ohne HTML oder andere Markierungen.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss aus **1024 oder weniger Zeichen** einfachen Textes bestehen, ohne HTML oder andere Markierungen.
- InputEncoding
  - : Die zu verwendende {{Glossary("Character_encoding", "Zeichenkodierung")}} beim Absenden von Eingaben an die Suchmaschine.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, fügen Sie ein 16×16-Bild des Typs `image/x-icon` (z.B. `/favicon.ico`) und ein 64×64-Bild des Typs `image/jpeg` oder `image/png` bei.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Reference/Schemes/data) verwenden. (Sie können eine `data:` URL aus einer Symboldatei bei [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox speichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Such-Plugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data)'s `searchplugins/`-Ordner gespeichert). `http:` und `https:` URLs werden in `data:` URLs konvertiert, wenn dies gemacht wird.

    > [!NOTE]
    > Für Symbole, die aus der Ferne geladen werden (d.h. von `https://` URLs im Gegensatz zu `data:` URLs), verwirft Firefox Symbole, die größer als **10 Kilobytes** sind.

    ![Suchvorschläge von Google angezeigt im Suchfeld von Firefox](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das Attribut `template` gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die tatsächliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL an, um Suchvorschläge abzurufen. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer eingegebenen Suchbegriffe in der Suchleiste oder Adressleiste zu ersetzen. Andere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1-Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Verlinkung zur OpenSearch-Beschreibungsdatei

Um die automatische Erkennung zu unterstützen, fügen Sie für jede Suchmaschine ein `<link>`-Element in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[descriptionURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erklärt:

- `searchTitle`
  - : Der Name der durchzuführenden Suche, wie "Suche MDC" oder "Yahoo! Suche". Dieser muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- `descriptionURL`
  - : Die URL zur XML-Beschreibungsdatei, damit der Browser sie herunterladen kann.

Wenn Ihre Website mehrere Suchmaschinen bietet, können Sie die automatische Erkennung für alle unterstützen. Zum Beispiel:

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
> In Firefox zeigt eine Symboländerung im Suchfeld an, dass ein Such-Plugin bereitgestellt wird. (Siehe Bild, das grüne Plus-Zeichen.) Daher wird dem Benutzer _kein_ Hinweis angezeigt, wenn ein Suchfeld nicht in der Benutzeroberfläche des Benutzers angezeigt wird. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung automatischer Updates für OpenSearch-Beschreibung

Die OpenSearch-Beschreibungsdatei kann automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url
  type="application/opensearchdescription+xml"
  rel="self"
  template="https://example.com/mysearchdescription.xml" />
```

## Fehlerbehebungstipps

Wenn in Ihrer XML-Beschreibungsdatei ein Fehler vorhanden ist, können Sie auf Fehler stoßen, wenn Sie die Suchmaschine hinzufügen. Wenn die Fehlermeldung nicht hilfreich ist, verwenden Sie die folgenden Tipps zur Fehlersuche:

- Überprüfen Sie, ob Ihr Server OpenSearch-Beschreibungen mit `Content-Type: application/opensearchdescription+xml` bereitstellt.
- Stellen Sie sicher, dass Ihre XML-Beschreibungsdatei wohlgeformt ist. Sie können dies überprüfen, indem Sie die Datei direkt in einen Browser laden. Ampersands (`&`) in der `template`-URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem abschließenden Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Stellen Sie sicher, dass Sie das `xmlns`-Attribut einschließen—ohne dieses könnten Sie eine Fehlermeldung wie "Firefox konnte das Such-Plugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html` URL einfügen — Suchmaschinen, die nur Atom oder {{Glossary("RSS", "RSS")}} URL Typen beinhalten (was gültig ist, aber Firefox nicht unterstützt), werden ebenfalls die Fehlermeldung "konnte das Such-Plugin nicht herunterladen" generieren.
- Aus der Ferne abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox Bug 361923](https://bugzil.la/361923)).
- Wie zuvor erwähnt, aktivieren Browser möglicherweise nicht standardmäßig Website-Suchverknüpfungen. Überprüfen Sie die Einstellungen des Browsers und stellen Sie sicher, dass die Suchmaschine aktiviert ist.

Darüber hinaus bietet der Such-Plugin-Dienst einen Log-Mechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann erscheinen Protokollinformationen in Firefox' [Browserkonsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) (Werkzeuge ➤ Browserwerkzeuge ➤ Browserkonsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Schnelle Website-Suche](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Entdeckung des Suchanbieters](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Mit Tab suchen](https://www.chromium.org/tab-to-search/)
- imdb.com hat ein [funktionierendes `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - OpenSearch-Plugins erstellen. [Benutzerdefinierte Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
