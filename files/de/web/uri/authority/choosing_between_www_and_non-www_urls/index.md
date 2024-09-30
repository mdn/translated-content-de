---
title: Auswahl zwischen www und nicht-www URLs
slug: Web/URI/Authority/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Eine wiederkehrende Frage unter Website-Besitzern ist, ob sie 'www' (`www.example.com`) oder 'non-www' (`example.com`) URLs wählen sollten. Diese Seite bietet einige Ratschläge, was am besten ist.

## Was sind Domainnamen?

In einer HTTP-URL ist der erste Teilstring, der dem initialen `http://` oder `https://` folgt, der Domainname. Dieser Domainname wird auf einem Server gehostet, auf dem das Dokument liegt.

Ein Server ist nicht unbedingt eine physische Maschine: Mehrere Server können auf derselben physischen Maschine existieren. Oder ein Server kann von mehreren Maschinen betrieben werden, die zusammenarbeiten, um die Anfragen zu beantworten oder die Last der Anfragen zwischen ihnen zu verteilen. Der Kernpunkt ist, dass semantisch _ein Domainname einen einzelnen Server repräsentiert_.

## Muss ich mich also für eine der Optionen für meine Website entscheiden?

- **Ja**, Sie müssen sich für eine entscheiden und dabei bleiben. Die Wahl, welche als Ihre kanonische Adresse gelten soll, liegt bei Ihnen, aber wenn Sie sich für eine entscheiden, bleiben Sie dabei. Es wird Ihre Website für Ihre Nutzer und Suchmaschinen konsistenter erscheinen lassen. Dazu gehört, dass Sie immer zu der gewählten Domain verlinken (was nicht schwer sein sollte, wenn Sie relative URLs auf Ihrer Website verwenden) und immer Links (per E-Mail/soziale Netzwerke, etc.) zur gleichen Domain teilen.
- **Nein**, Sie können beide haben. Wichtig ist, dass Sie kohärent und konsistent damit umgehen, welche die offizielle Domain ist. **Diese offizielle Domain wird der _kanonische_ Name genannt.** Alle Ihre absoluten Links sollten ihn verwenden. Aber selbst dann können Sie die andere Domain weiterhin verwenden: HTTP erlaubt zwei Techniken, um Ihren Benutzern oder Suchmaschinen klar zu machen, welche Domain die kanonische ist, während die nicht-kanonische Domain weiterhin funktioniert und die erwarteten Seiten bereitstellt.

Wählen Sie also eine Ihrer Domains als Ihre kanonische! Unten sind zwei Techniken aufgeführt, die es ermöglichen, dass die nicht-kanonische Domain weiterhin funktioniert.

## Techniken für kanonische URLs

Es gibt verschiedene Möglichkeiten zu entscheiden, welche Website _kanonisch_ ist.

### Verwendung von HTTP 301-Weiterleitungen

In diesem Fall müssen Sie den Server, der die HTTP-Anfragen empfängt (der höchstwahrscheinlich derselbe für 'www' und 'non-www' URLs ist), so konfigurieren, dass er mit einer passenden HTTP {{HTTPStatus(301)}}-Antwort auf jede Anfrage an die nicht-kanonische Domain antwortet. Dies leitet den Browser, der versucht, auf die nicht-kanonischen URLs zuzugreifen, zu ihrem kanonischen Äquivalent um. Wenn Sie beispielsweise 'non-www' URLs als kanonischen Typ gewählt haben, sollten Sie alle 'www' URLs auf ihre entsprechenden URLs ohne 'www' umleiten.

Beispiel:

1. Ein Server erhält eine Anfrage für `http://www.example.org/whaddup` (wenn die kanonische Domain example.org ist).
2. Der Server antwortet mit einem Code {{HTTPStatus(301)}} mit dem {{HTTPHeader("Location")}} Header `Location: http://example.org/whaddup`.
3. Der Client sendet eine Anfrage an den Standort unter der kanonischen Domain: `http://example.org/whaddup`.

Das [HTML5 Boilerplate-Projekt](https://github.com/h5bp/html5-boilerplate) bietet ein Beispiel, [wie man einen Apache-Server konfiguriert, um eine Domain zur anderen umzuleiten](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Verwendung von `<link rel="canonical">`

Es ist möglich, ein spezielles HTML {{HTMLElement("link")}}-Element zu einer Seite hinzuzufügen, um anzugeben, was die kanonische Adresse einer Seite ist. Dies hat keine Auswirkungen auf den menschlichen Leser der Seite, sagt jedoch den Suchmaschinen-Crawlern, wo die Seite tatsächlich lebt. Auf diese Weise indexieren Suchmaschinen nicht dieselbe Seite mehrmals, was möglicherweise dazu führen könnte, dass sie als Duplikatinhalt oder Spam betrachtet und sogar aus den Suchmaschinenergebnissen entfernt oder herabgestuft wird.

Wenn ein solches Tag hinzugefügt wird, liefern Sie denselben Inhalt für beide Domains und sagen den Suchmaschinen, welche URL kanonisch ist. Im vorigen Beispiel würde `http://www.example.org/whaddup` denselben Inhalt wie `http://example.org/whaddup` bereitstellen, jedoch mit einem zusätzlichen {{HTMLElement("link")}}-Element im Kopf:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

Im Gegensatz zum vorherigen Fall betrachtet die Browser-Historie non-www und www URLs als unabhängige Einträge.

## Lassen Sie Ihre Seite für beide funktionieren

Mit diesen Techniken können Sie Ihren Server so konfigurieren, dass er für beide, die www-präfixierten und die non-www-präfixierten Domains, korrekt antwortet. Es ist ratsam, dies zu tun, da Sie nicht vorhersagen können, welche URL Benutzer in die URL-Leiste ihres Browsers eingeben werden. Es geht darum, zu entscheiden, welchen Typ Sie als Ihren kanonischen Standort verwenden möchten, und dann den anderen Typ dorthin umzuleiten.

## Entscheidung treffen

Dies ist ein sehr subjektives Thema – es könnte als ein [bikeshedding](https://bikeshed.com/) Problem betrachtet werden. Wenn Sie tiefer einsteigen möchten, finden Sie hier einige Ressourcen:

- [Optionen für nackte Domains](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) auf netlify.com (2020)
- [WWW vs non-WWW – Was ist besser für WordPress-SEO?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) auf wpbeginner.com (2023)

## Siehe auch

- [Statistiken darüber, was Menschen in die URL-Leiste eingeben](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
