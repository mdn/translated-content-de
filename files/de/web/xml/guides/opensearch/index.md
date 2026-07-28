---
title: OpenSearch-Beschreibungsformat
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Weboberfläche einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Clientanwendung diese Suchmaschine verwenden kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z.B. Suchvorschläge. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Suchmaschinen zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

## Übersicht

Die Adressleiste in Browsern hat eine doppelte Funktion: Sie können eine URL eintippen, um direkt zu einer Seite zu gelangen, oder Sie können einen Suchbegriff eingeben, um eine Suchmaschine zu befragen. Die Suchmaschine liefert eine Liste von Ergebnissen, die Sie direkt durchsuchen können, oder Sie können die vollständige Ergebnisseite der Suchmaschine öffnen.

Standardmäßig können Browser eine Verbindung zu einigen populären Suchmaschinen wie Google, Bing oder Yandex herstellen. Das OpenSearch-Protokoll ermöglicht es Websites, ihre eigenen Suchmaschinen zu definieren, was Benutzern erlaubt, direkt aus der Adressleiste des Browsers auf diesen Websites zu suchen. Zum Beispiel verfügt die MDN-Website über eine umfassende Suchmaschine. Wenn sich MDN als Suchmaschine registriert, können Benutzer direkt aus der Adressleiste bei MDN suchen.

Browser befragen eine Suchmaschine durch Anforderung einer URL. Die Seite definiert eine Vorlage für die anzufordernde URL, und der Browser füllt die Suchbegriffe des Benutzers in den angegebenen Platzhaltern ein. Wenn die URL der Suchmaschine zum Beispiel `https://example.com/search?q={searchTerms}` lautet, wird der Browser `https://example.com/search?q=foo` anfordern, wenn der Benutzer "foo" in die Adressleiste eingibt. Die Suchmaschine generiert dann eine Antwort - entweder eine Liste von Suchergebnissen oder eine vollständige Ergebnisseite.

Eine Website definiert ihre Suchmaschine, indem sie in ihrem HTML auf eine XML-Beschreibungsdatei verlinkt. Wenn der Benutzer die Website zum ersten Mal besucht, erkennt der Browser diese Beschreibungsdatei und registriert die Suchmaschine. Der Browser verwendet dann die registrierte Suchmaschine, um Suchanfragen aus der Adressleiste zu bearbeiten.

> [!NOTE]
> Chrome registriert Websites-Suchmaschinen standardmäßig als "inaktiv". Benutzer müssen jede Website manuell in den Suchmaschineneinstellungen aktivieren.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der grundlegenden Vorlage unten. Abschnitte in _\[eckigen Klammern]_ sollten für Ihre spezifische Suchmaschine angepasst werden.

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
  - : Ein kurzer Name für die Suchmaschine. Er darf maximal **16 Zeichen** einfacher Text sein, ohne HTML oder andere Markup.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie darf maximal **1024 Zeichen** einfacher Text sein, ohne HTML oder andere Markup.
- InputEncoding
  - : Die zu verwendende {{Glossary("Character_encoding", "Zeichenkodierung")}} bei der Übermittlung von Eingaben an die Suchmaschine.
- Image
  - : URL eines Symbols für die Suchmaschine. Wenn möglich, ein 16×16 Bild des Typs `image/x-icon` (wie `/favicon.ico`) und ein 64×64 Bild des Typs `image/jpeg` oder `image/png` einschließen.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Reference/Schemes/data) verwenden. (Sie können eine `data:` URL aus einer Icon-Datei bei [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox speichert das Icon als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Such-Plugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) im `searchplugins/` Ordner gespeichert). `http:` und `https:` URLs werden in `data:` URLs umgewandelt, wenn dies erfolgt.

    > [!NOTE]
    > Bei Icons, die remote geladen werden (das heißt, von `https://` URLs anstatt von `data:` URLs), wird Firefox Icons größer als **10 Kilobyte** ablehnen.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url
  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:
    - `type="text/html"` spezifiziert die URL für die eigentliche Suchanfrage.
    - `type="application/x-suggestions+json"` spezifiziert die URL zum Abrufen von Suchvorschlägen. Ab Firefox 63 wird `type="application/json"` als Alias zugelassen.
    - `type="application/x-moz-keywordsearch"` spezifiziert die URL, die verwendet wird, wenn eine Schlüsselwortsuche in die Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die im Such- oder Adressfeld eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter werden in [OpenSearch 1.1 Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}} Format abzurufen.

## Verlinkung zur OpenSearch-Beschreibungsdatei

Um die automatische Erkennung zu unterstützen, fügen Sie ein `<link>`-Element für jede Suchmaschine in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[descriptionURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erläutert:

- `searchTitle`
  - : Der Name der durchzuführenden Suche, wie "Search MDC" oder "Yahoo! Search". Dies muss mit dem `<ShortName>` Ihrer Plugindatei übereinstimmen.
- `descriptionURL`
  - : Die URL zur XML-Beschreibungsdatei, sodass der Browser sie herunterladen kann.

Wenn Ihre Website mehrere Suchmaschinen anbietet, können Sie die automatische Erkennung für alle unterstützen. Beispielsweise:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="https://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="https://example.com/mysitetitle.xml" />
```

Auf diese Weise kann Ihre Website zwei Suchmaschinen anbieten: eine nach Autor und eine nach Titel.

> [!NOTE]
> In Firefox weist eine Symboländerung im Suchfeld darauf hin, dass ein Such-Plugin bereitgestellt wird. (Siehe Bild, das grüne Pluszeichen.) Wenn ein Suchfeld in der Benutzeroberfläche des Benutzers nicht angezeigt wird, erhalten sie _keine_ Anzeige. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung automatischer Updates für OpenSearch-Beschreibung

Die OpenSearch-Beschreibungsdatei kann automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` ein. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url
  type="application/opensearchdescription+xml"
  rel="self"
  template="https://example.com/mysearchdescription.xml" />
```

## Fehlersuche

Wenn ein Fehler in Ihrer XML-Beschreibungsdatei vorliegt, können beim Hinzufügen der Suchmaschine Fehler auftreten. Wenn die Fehlermeldung nicht hilfreich ist, verwenden Sie die folgenden Tipps zur Fehlerbehebung:

- Überprüfen Sie, ob Ihr Server OpenSearch-Beschreibungen mit `Content-Type: application/opensearchdescription+xml` bereitstellt.
- Stellen Sie sicher, dass Ihre XML-Beschreibungsdatei wohlgeformt ist. Sie können dies überprüfen, indem Sie die Datei direkt in einem Browser laden. Ampersands (`&`) in der `template` URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Stellen Sie sicher, dass das `xmlns`-Attribut enthalten ist—ohne es könnte die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" erscheinen.
- Sie **müssen** eine `text/html` URL einschließen — Suchmaschinen, die nur Atom- oder {{Glossary("RSS", "RSS")}} URL-Typen einschließen (was gültig ist, aber von Firefox nicht unterstützt wird), erzeugen auch den Fehler "konnte das Such-Plugin nicht herunterladen".
- Remote abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox Bug 361923](https://bugzil.la/361923)).
- Wie bereits erwähnt, aktivieren Browser möglicherweise nicht standardmäßig die Suchverknüpfungen der Website. Überprüfen Sie die Einstellungen des Browsers und stellen Sie sicher, dass die Suchmaschine aktiviert ist.

Darüber hinaus bietet der Such-Plugin-Dienst ein Protokollierungsmechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann werden Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole) angezeigt, wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Versionshinweise: Schnelle Website-Suche](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev-Leitfaden: Entdeckung des Suchanbieters](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Tab zum Suchen](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - erstellen Sie OpenSearch-Plugins. [Angepasste Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
