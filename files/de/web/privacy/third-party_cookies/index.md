---
title: Third-Party-Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: eb061bd719102c148cf87d12fd7056ed0c5071c8
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Third-Party-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Third-Party-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem Schema (in der Regel `https`) verknüpft und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer gerade betrachtet (die im Adressfeld des Browsers angezeigte URL), wird das Cookie als von derselben Site stammend betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Site stammend betrachtet und als _Third-Party-Cookie_ bezeichnet.

> [!NOTE]
> Third-Party-Cookies werden manchmal als _Cross-Site-Cookies_ bezeichnet. Dies ist möglicherweise ein zutreffenderer Name, da der Begriff _Third-Party-Cookies_ eine Zugehörigkeit zu einem Drittunternehmen oder einer Drittorganisation impliziert. Das Verhalten und die potenziellen Probleme sind jedoch unabhängig davon gleich, ob Sie alle beteiligten Sites besitzen oder nicht. Beispielsweise könnte eine Site auf Ressourcen wie Bilder in einer anderen Domain zugreifen, die sie selbst besitzt.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer eine Seite zum ersten Mal besucht, einem internen Link zu einer anderen Seite auf derselben Site folgt oder eine Ressource anfordert, die sich auf derselben Site befindet (zum Beispiel ein eingebettetes Bild, Web-Schriftart oder JavaScript-Datei).

Third-Party-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn auf einer Site ein Link angeklickt wird, um auf eine andere Site zu navigieren.
- Wenn eine Seite Komponenten von anderen Sites einbettet, wie Bilder oder andere Dokumente in {{htmlelement("iframe")}}s (häufig als _Third-Party-Inhalte_ bezeichnet). Diese Komponenten können neben der ursprünglichen Anfrage zusätzliche Anfragen generieren, die weitere Third-Party-Cookies setzen.

## Wofür werden Third-Party-Cookies verwendet?

Third-Party-Cookies, die gesetzt werden, wenn Links zu anderen Sites geklickt werden, werden für verschiedene Zwecke verwendet. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Referrer zurückerstattet wird.

Auch Third-Party-Inhalte, die Cookies setzen, haben viele verschiedene Verwendungszwecke. Beispielsweise könnten Sie ein Anmelde-Widget auf mehrere unterschiedliche, aber verwandte Sites eingebettet haben, das ein Cookie über alle Sites hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Site erneut anmelden muss.

Weitere Verwendungszwecke für Third-Party-Cookies sind:

- Teilen von Benutzereinstellungen oder Themeninformationen über mehrere Sites hinweg.
- Erfassen von Analysedaten über mehrere Sites.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um ad-tech-Plattformen in die Lage zu versetzen, relevantere Anzeigen zu liefern.

Lassen Sie uns das obige Beispiel mit dem Anmelde-Widget anhand eines fiktiven Unternehmens illustrieren, das separate Domains für seinen Online-Shop (`shop.site`), Community-Diskussionsforen (`forum.site`) sowie Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Sites hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus über Sites hinweg aufrechtzuerhalten. Ein Benutzer kann sich bei einer dieser Sites anmelden und ein Cookie im Browser für `auth.site` erstellen, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Sites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das beim Anmelden auf der ersten Site gesetzt wurde. Es kann dies an den Server senden, prüfen, ob es noch gültig ist, und den Benutzer sofort auf dieser Site anmelden.

![visuelle Darstellung der oben beschriebenen Third-Party-Anmeldesystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-Party-Cookies?

Die obigen Anwendungsfälle klingen ganz harmlos. Third-Party-Cookies können jedoch auch für illegitime Zwecke ohne die Zustimmung des Benutzers verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einer Drittanbieter-Site oder das Interagieren mit eingebetteten Third-Party-Inhalten in einem `<iframe>` (zum Beispiel das Ausfüllen eines Formulars oder das Klicken eines Buttons) könnte dazu führen, dass Cookies gesetzt werden, die Benutzerinformationen in die Hände anderer als der erwarteten Personen geben. Diese Informationen könnten verwendet werden, um:

- Benutzer mit gezielten Anzeigen zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen auszuwählen, die den Affiliate-Umsatz steigern oder Statistiken manipulieren.

Individuell sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Third-Party-Server können Informationen aus mehreren Third-Party-Cookies kombinieren, die auf verschiedenen Sites gesetzt wurden, auf denen Third-Party-Inhalte eingebettet sind, um ein detailliertes Profil der Browsing-Historie, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unheimliche, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-Party-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Durch illegitime Mittel erlangte Benutzerinformationen werden oft auch an andere Dritte verkauft, wodurch das Problem weiter multipliziert wird.

Gesetzgebungen wie die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und das [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben dazu beigetragen, indem sie Unternehmen gesetzlich dazu verpflichten, transparent über die von ihnen gesetzten Cookies und die erfassten Informationen zu berichten. Beispiele hierfür sind die Aufforderung an Kunden, sich für die Datenerfassung zu entscheiden, ihnen zu erlauben, einzusehen, welche Daten ein Unternehmen über sie hat, und die Daten gegebenenfalls zu löschen. Es ist jedoch immer noch nicht immer klar, wie die Daten der Kunden verwendet werden.

## Wie gehen Browser mit Third-Party-Cookies um?

Browser-Anbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher alle angefangen, Third-Party-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihrem Quellcode beinhalten, um langjährige Third-Party-Cookie-Probleme mit beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) führte dazu, dass Firefox Third-Party-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Tracking-Schutz in Firefox](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Verbesserter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Firefox gibt auch Third-Party-Cookies ein separates Cookie-Jar pro Site, sodass sie nicht verwendet werden können, um Benutzer über Sites hinweg zu verfolgen (siehe [Totaler Cookie-Schutz](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/)). Im [Verbesserten Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) im strengen Modus blockiert Firefox nun alle Third-Party-Cookies. Website-Entwickler können weiterhin Third-Party-Cookies mit einem getrennten Cookie-Jar pro Site (partitionierte Cookies) über [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) verwenden.
- Apple hat auch eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); diese Richtlinie hat zu einer ähnlichen Reihe von Third-Party-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligente Tracking-Prävention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt der Erstellung dieses Dokuments blockiert Google Chrome Third-Party-Cookies standardmäßig nur im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass Third-Party-Cookies jederzeit blockiert werden, wenn sie dies über `chrome://settings` wünschen. Google hat begonnen, für einen begrenzten Prozentsatz der Chrome-Nutzer Third-Party-Cookies zu deaktivieren, um die Auswirkungen zu testen, die dies haben wird, und gleichzeitig Technologien zu entwickeln, um wichtige Anwendungsfälle ohne Notwendigkeit von Third-Party-Cookies zu ermöglichen. Siehe [Ersetzung von Third-Party-Cookies](#ersetzung_von_third-party-cookies) für Details.
- Edge blockiert Tracker von unbesuchten Sites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt der Erstellung erforscht Microsoft auch, Third-Party-Cookies standardmäßig in Edge zu blockieren. Siehe [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Nutzung von Third-Party-Cookies im Einzelfall in Firefox über die Browser-Einstellungen zuzulassen. In Safari sind die Kontrollmöglichkeiten jedoch eingeschränkter — Sie können das Cross-Site-Tracking deaktivieren, aber der Zugriff auf Third-Party-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erlaubt werden.

> [!NOTE]
> Third-Party-Cookies (oder einfach Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Third-Party-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Wenn Browser zunehmend Einschränkungen für Third-Party-Cookies auferlegen, sollten Entwickler beginnen, Wege zu finden, um ihre Abhängigkeit von ihnen zu verringern: siehe [Ersetzung von Third-Party-Cookies](#ersetzung_von_third-party-cookies).

## Verwendung von Third-Party-Cookies

### Aktivieren von Third-Party-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern, festzulegen, ob/wann Third-Party-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Third-Party-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Site navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Site zu Ihrer Site navigiert, um beispielsweise die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Es ist jedoch nicht geeignet, wenn Sie Cross-Site-Inhalte über mehrere Sites hinweg in `<iframe>`s einbetten und sich auf Third-Party-Cookies für Funktionalität verlassen möchten, wie im Fall des oben betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie `SameSite=None` explizit setzen, um dem Browser zu erlauben, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme trägt dazu bei, Cross-Site-Scripting- ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebenszeit](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-Party-Cookies

Es gibt mehrere Strategien, um Sites zu helfen, Unterbrechungen in Browsern zu minimieren, in denen Third-Party-Cookies blockiert sind:

1. Überprüfen Sie Ihre Third-Party-Cookie-Nutzung. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Third-Party-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder in den Entwickler-Tools Ihres Browsers nach gespeicherten `SameSite=None`-Cookies suchen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Problemliste](https://developer.chrome.com/docs/devtools/issues/) [berichtigt auch Probleme mit der Blockierung von Third-Party-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-Party-Cookies, um zu sehen, was nicht funktioniert. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfangs könnten Sie Ihren Code robuster gestalten, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-Party-Cookie-Daten nicht verfügbar sind, anstatt völlig zu versagen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "graziösen Degradierung")}}.
4. Sammeln Sie Daten durch alternative Mittel wie Benutzerumfragen oder Quizfragen oder schauen Sie sich Daten an, die Sie bereits haben, um Trends abzuleiten (z.B. Produktbestellhistorien).
5. Verwenden Sie einen alternativen Speichermechanismus auf Client-Seite wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten beizubehalten, oder ziehen Sie eine serverseitige Lösung in Betracht.
6. Wenn Ihre Third-Party-Cookies nur über eine geringe Anzahl verwandter, bekannter Websites hinweg verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Cookie-Zugriff nur für diese spezifischen Sites zu ermöglichen. Storage Access fordert den Benutzer auf, einer Site die Erlaubnis zu erteilen, Third-Party-Cookies pro Frame zu verwenden.
   - Wenn Sie bereits eine Lösung mit der Storage Access API für Firefox oder Safari implementiert haben, ist dies eine gute Gelegenheit, Ihre Implementierung mit dem Verhalten von Chrome zu überprüfen, das aktualisiert wurde, um volle Unterstützung in Version 119 zu bieten.
   - Related Website Sets können als Progressive Enhancement der Storage Access API betrachtet werden: Die API kann auf dieselbe Weise verwendet werden, aber Sites im Set werden nicht die Benutzer um Erlaubnis bitten, um auf Third-Party-Cookies zuzugreifen.
7. Wenn Ihre Third-Party-Cookies auf 1:1-Basis mit den Top-Level-Sites verwendet werden, auf denen sie generiert wurden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch bekannt als partitionierte Cookies) verwenden, um Ihre Cookies in partitionierte Speicherung mit einem separaten Cookie-Jar pro Top-Level-Site zu überführen. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren bestehenden Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Sites geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar ist.

## Ersetzung von Third-Party-Cookies

Mehrere Funktionen stehen Entwicklern zur Verfügung, die auf die Verwendung von Third-Party-Cookies verzichten möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle implementieren. Einige dieser Funktionen befinden sich noch in einem frühen experimentellen Stadium, aber sie sind es wert, berücksichtigt zu werden, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können anfangen, die verschiedenen Funktionen im Googles [Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox)-Projekt zu erforschen, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur in Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Sites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Betrugs- und Spamschutz durch den Austausch begrenzter, nicht identifizierender Informationen über Sites hinweg.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessensbasierte Werbung und Inhaltspersonalisierung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwendung von Daten aus einer App oder Site, um bei einem Besuch der Benutzer auf einer anderen App oder Site eine Anzeige auszuwählen.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Konversionen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
