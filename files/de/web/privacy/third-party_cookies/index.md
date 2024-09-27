---
title: Third-party Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Third-party Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Third-party Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem bestimmten Schema (normalerweise `https`) verbunden und kann auch mit Subdomains verbunden sein, wenn das {{HTTPHeader("Set-Cookie")}}-`Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die im Adressfeld des Browsers angezeigte URL), wird das Cookie als von derselben Website wie die Seite stammend betrachtet und als _First-party Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Website stammend betrachtet und als _Third-party Cookie_ bezeichnet.

> [!NOTE]
> Third-party Cookies werden manchmal als _cross-site Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Third-party Cookies_ implizieren, dass sie einem Drittunternehmen oder einer Drittorganisation gehören. Das Verhalten und die potenziellen Probleme sind jedoch gleich, unabhängig davon, ob Sie alle beteiligten Websites besitzen oder nicht. Ein Beispiel ist, dass eine Website Ressourcen wie Bilder von einer anderen Domain abruft, die sie besitzt.

Ein First-party Cookie kann gesetzt werden, wenn ein Benutzer zuerst eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource abruft, die auf derselben Website gespeichert ist (zum Beispiel ein eingebettetes Bild, ein Web-Font oder eine JavaScript-Datei).

Third-party Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, zum Beispiel Bilder oder andere in {{htmlelement("iframe")}}s eingebettete Dokumente (oft als _Third-party Content_ bezeichnet). Neben der ursprünglichen Anfrage für die Komponente können diese Komponenten weitere Anfragen generieren, die mehr Third-party Cookies setzen.

## Wofür werden Third-party Cookies verwendet?

Third-party Cookies, die beim Klicken auf Links zu anderen Websites gesetzt werden, werden für verschiedene Zwecke verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweiser gezahlt werden kann.

Third-party Content, das Cookies setzt, hat ebenfalls viele verschiedene Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Websites eingebettet haben, das ein Cookie auf allen Websites teilt, um zu bestätigen, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Website erneut anmelden muss.

Weitere Anwendungsfälle für Third-party Cookies sind:

- Teilen von Benutzereinstellungen oder Theme-Informationen über mehrere Websites.
- Sammlung von Analysedaten über mehrere Websites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Das oben erwähnte Anmelde-Widget-Beispiel lässt sich mit einem fiktiven Unternehmen weiter veranschaulichen, das getrennte Domains für seinen Online-Shop (`shop.site`), Community-Foren (`forum.site`) und Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus über die Seiten hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Seiten anmelden und ein Cookie im Browser für `auth.site` erstellen, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Seiten geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das gesetzt wurde, als der Benutzer sich auf der ersten Seite anmeldete. Sie kann diese ID an den Server senden, um zu überprüfen, ob sie noch gültig ist, und sich sofort auf dieser Seite anmelden.

![Visuelle Darstellung des oben beschriebenen Third-party Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-party Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Third-party Cookies können jedoch auch für illegitime Zwecke ohne die Zustimmung des Benutzers verwendet werden, die technisch nicht von legitimen Anwendungsfällen unterscheidbar sind.

Das Folgen eines Links zu einer Drittanbieter-Website oder die Interaktion mit in einem `<iframe>` eingebetteten Third-party Content (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte zur Setzung von Cookies führen, die Benutzerinformationen in die Hände von jemandem geben, den sie nicht erwartet hatten. Diese Informationen könnten verwendet werden, um:

- Benutzer mit gezielten Anzeigen im Web zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Anrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die das Affiliate-Einkommen erhöhen oder Statistiken manipulieren.

Solche Fälle sind schon einzeln schlimm genug, aber es wird noch schlimmer. Third-party Server können Informationen aus mehreren auf verschiedenen Websites gesetzten Third-party Cookies kombinieren, auf denen die Drittanbieter-Inhalte eingebettet sind, um ein detailliertes Profil des Browserverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann genutzt werden, um unheimliche, aufdringliche Benutzererlebnisse zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-party Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die auf illegitime Weise gewonnen wurden, werden oft auch an andere Dritte verkauft, was das Problem weiter verschärft.

Gesetzgebung wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie es gesetzlich vorschreiben, dass Unternehmen transparent über die gesetzten Cookies und die gesammelten Informationen sein müssen. Beispiele dafür sind, Kunden zu bitten, der Datensammlung zuzustimmen, ihnen zu erlauben, zu sehen, welche Daten ein Unternehmen über sie hat, und diese Daten zu löschen, wenn sie es wünschen. Es ist jedoch für Kunden immer noch nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Third-party Cookies um?

Browseranbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher begonnen, Third-party Cookies standardmäßig zu blockieren, während sie Ausnahmen und Heuristiken in ihren Quellcodes einfügen, um langjährige Third-party Cookie-Probleme mit beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Third-party Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox Tracking-Schutz](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/de/kb/erweiterter-tracking-schutz)). Firefox gibt Third-party Cookies auch ein separates Cookie-Glas pro Website, sodass sie nicht zur Verfolgung von Benutzern über Websites hinweg verwendet werden können (siehe [Total Cookie Protection](https://blog.mozilla.org/de/produkte/firefox/firefox-rollt-total-cookie-protection-standardmaessig-fuer-alle-nutzer-weltweit-aus/)).
- Apple hat auch eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); in deren Folge wurde ein ähnlicher Satz von Third-party Cookie-Schutzen eingeführt, die standardmäßig aktiviert sind; siehe [Intelligente Tracking-Prävention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome Third-party Cookies standardmäßig nur im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass Third-party Cookies immer blockiert werden, wenn sie dies wünschen, über `chrome://settings`. Google hat begonnen, Third-party Cookies für einen begrenzten Prozentsatz der Chrome-Benutzer zu deaktivieren, um die Auswirkungen zu testen, während gleichzeitig Technologien entwickelt werden, um die wichtigsten Anwendungsfälle ohne Third-party Cookies zu ermöglichen. Siehe [Ersetzen von Third-party Cookies](#ersetzen_von_third-party_cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Websites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens beginnt Microsoft auch, die Blockierung von Third-party Cookies in Edge standardmäßig zu erkunden. Siehe [Tracking-Prävention](https://learn.microsoft.com/de-de/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Verwendung von Third-party Cookies fallweise in Firefox über die Browsereinstellungen zuzulassen. In Safari jedoch ist die Kontrolle eingeschränkter — Sie können das Cross-Site-Tracking-Prävention ausschalten, aber das Zulassen des Zugriffs auf Third-party Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Third-party Cookies (oder nur Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Third-party Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Third-party Cookies auferlegen, sollten Entwickler beginnen, nach Wegen zu suchen, um ihre Abhängigkeit von ihnen zu reduzieren: siehe [Ersetzen von Third-party Cookies](#ersetzen_von_third-party_cookies).

## Verwendung von Third-party Cookies

### Aktivieren von Third-party Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern, festzulegen, ob/wann Third-party Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert `Lax` verwendet. Dieser weist den Browser an, keine Third-party Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Seite navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website zu Ihrer site navigiert, um beispielsweise die Erfahrung zu personalisieren, sobald sie dort ankommen.

Es ist jedoch nicht gut, wenn Sie Third-party Content über mehrere Websites hinweg innerhalb von `<iframe>`s einbetten wollen und auf Third-party Cookies für die Funktionalität angewiesen sind, zum Beispiel im Fall des oben betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies herumzureichen:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um JavaScript den Zugriff auf das Cookie zu verwehren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-party Cookies

Es gibt mehrere Strategien, um Seiten zu helfen, den Schaden zu minimieren, wenn Browser Third-party Cookies blockieren:

1. Überprüfen Sie Ihre Verwendung von Third-party Cookies. Cookies müssen das `SameSite=None`-Attribut haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Third-party Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder gespeicherte `SameSite=None` Cookies in Ihren Browser-DevTools überprüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Problempanel](https://developer.chrome.com/docs/devtools/issues/) [meldet auch Probleme mit der Blockierung von Third-party Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) sowie eine Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-party Cookies, um zu sehen, was ausfällt. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst könnten Sie Ihren Code widerstandsfähiger machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-party Cookie-Daten nicht verfügbar sind, anstatt sie vollständig zu brechen. Befolgen Sie die Prinzipien der [graceful degradation](/de/docs/Glossary/Graceful_degradation).
4. Sammeln Sie Daten auf alternative Weise, wie durch Benutzerumfragen oder Quiz, oder schauen Sie auf bereits vorhandene Daten, um Trends zu erkennen (zum Beispiel Produktbestellhistorien).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder überlegen Sie eine serverseitige Lösung.
6. Wenn Ihre Third-party Cookies nur über eine kleine Anzahl verwandter, bekannter Websites hinweg verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den plattformübergreifenden Cookie-Zugriff nur für diese spezifischen Websites zuzulassen. Die Storage Access fordert den Benutzer auf, der Website die Erlaubnis zu erteilen, Third-party Cookies auf einer Frame-basierten Basis zu verwenden.
   - Wenn Sie bereits eine Lösung mit der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihre Implementierung gegen Chromes Verhalten zu überprüfen, das in Version 119 aktualisiert wurde, um volle Unterstützung bereitzustellen.
   - Related Website Sets können als Progressive Enhancement der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set werden die Benutzer nicht um Erlaubnis bitten, um auf Third-party Cookies zuzugreifen.
7. Wenn Ihre Third-party Cookies auf 1:1-Basis mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies mit unabhängigem partitioniertem Zustand](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch als partitionierte Cookies bekannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site zu optieren. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren vorhandenen plattformübergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Sites geteilt werden. Beachten Sie, dass CHIPS derzeit nur für Chromium verfügbar ist.

## Ersetzen von Third-party Cookies

Entwicklern stehen mehrere Funktionen zur Verfügung, die Third-party Cookies vermeiden möchten, um die Privatsphäre der Nutzer zu respektieren und das Tracking zu minimieren, während die Implementierung verwandter Anwendungsfälle fortgeführt wird. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind es wert, in Betracht gezogen zu werden, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen Funktionen zu erkunden, die im Rahmen des [Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox)-Projekts von Google verfügbar sind, um zu sehen, ob sie für Ihren Anwendungsfall geeignet sind (diese sind derzeit experimentell und nur für Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Anti-Betrug und Anti-Spam, indem begrenzte, nicht identifizierende Informationen zwischen Websites ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbezogene Werbung und Inhaltsanpassung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwendung von Daten einer App oder Website, um beim Besuch einer anderen App oder Website eine Anzeige auszuwählen.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und -konversionen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
