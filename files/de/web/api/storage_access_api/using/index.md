---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten cross-site Dokumenten genutzt werden, um zu überprüfen, ob sie Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) haben und, wenn nicht, um Zugriff anzufordern. Wir werden uns kurz ein gängiges Szenario zum Speicherzugriff ansehen.

> [!NOTE]
> Wenn wir im Rahmen der Storage Access API von Third-Party-Cookies sprechen, meinen wir implizit [_nicht partitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Third-Party-Cookies.

## Nutzungshinweise

Die Storage Access API ist darauf ausgelegt, eingebetteten Inhalten zu ermöglichen, Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand anzufordern — die meisten modernen Browser blockieren solchen Zugriff standardmäßig, um die Privatsphäre der Benutzer zu schützen. Da eingebettete Inhalte nicht wissen, wie sich ein Browser diesbezüglich verhalten wird, ist es am besten, immer zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherzugriff hat, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt besonders für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser oft ein leeres Cookie-Glas zurückgeben, wenn der Zugriff auf Third-Party-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes cross-site {{htmlelement("iframe")}} unter einer Browser-Speicherzugriffspolitik, die den Zugriff ansonsten blockieren würde, Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand erhält.

## Erlauben eines sandboxed `<iframe>` die API zu verwenden

Zunächst einmal muss, wenn das `<iframe>` gesandboxed ist, die eingebettete Website das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzufügen, um zuzulassen, dass Storage Access API-Anfragen erfolgreich sind, zusammen mit `allow-scripts` und `allow-same-origin`, um es ihm zu ermöglichen, ein Skript auszuführen, das die API aufruft und sie in einem Ursprung ausführt, der Cookies und Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern von Speicherzugriff

Nun zum Code, der innerhalb des eingebetteten Dokuments ausgeführt wird. In diesem Code:

1. Wir verwenden zuerst Feature-Detection (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir unseren Code aus, der ohnehin auf Cookies zugreift, in der Hoffnung, dass es funktioniert. Er sollte ohnehin defensiv programmiert sein, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet das, dass dieses {{htmlelement("iframe")}} bereits Zugriff erhalten hat, und wir können unseren Code, der auf Cookies und Zustand zugreift, sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu überprüfen, ob die Berechtigung zum Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand bereits gewährt wurde (d.h., einem anderen gleichartigen Embedding). Wir umhüllen diesen ganzen Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, weil [einige Browser die Berechtigung `"storage-access"` nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was dazu führen kann, dass der `query()`-Aufruf eine Ausnahme wirft. Wenn es eine Ausnahme wirft, melden wir das an die Konsole und versuchen trotzdem, den Cookie-Code auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer Zeit spart, und dann können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Aufforderung an den Benutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Benutzer unsere Anfragen abgelehnt, Zugriff auf Third-Party-Cookies oder nicht partitionierten Zustand zu gewähren, und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, die eingebetteten Inhalte verarbeiten derzeit eine Benutzeraktion wie Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder wenn die Berechtigung bereits zuvor erteilt wurde. Wenn die Berechtigung vorher nicht gewährt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines user-gesture-basierten Event-Handlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das Chrome-exklusive Feature der [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) kann als Mechanismus zur progressiven Verbesserung betrachtet werden, der zusammen mit der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßigen Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand zwischen Websites im selben Set. Das bedeutet, dass der übliche Benutzerberechtigungs-Aufforderungsworkflow, wie oben beschrieben, nicht durchlaufen werden muss, was eine benutzerfreundlichere Erfahrung für die Benutzer von Webseiten im Set bedeutet.

## Speicherzugriff beim Top-Level-Site-Antrag im Namen eingebetteter Ressourcen

Die oben beschriebenen Funktionen der Storage Access API erlauben es einem eingebetteten Dokument, seinen eigenen Zugriff auf Third-Party-Cookies anzufordern. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung der Storage Access API, die es Top-Level-Websites ermöglicht, Speicherzugriff im Namen spezifischer verwandter Ursprünge anzufordern.

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Implementierung der Storage Access API auf Top-Level-Sites, die Cross-Site-Bilder oder -Skripts verwenden, die Cookies erfordern. Sie kann den Zugriff auf Third-Party-Cookies für Cross-Site-Ressourcen ermöglichen, die direkt in die Top-Level-Site eingebettet sind und nicht in der Lage sind, ihren eigenen Speicherzugriff anzufordern, beispielsweise über {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende Top-Level-Seite als auch die eingebettete Ressource, für die sie Speicherzugriff beantragt, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Ein typischer Gebrauch von `requestStorageAccessFor()` sieht so aus (diesmal im regulären Promise-Stil anstelle von async/await geschrieben):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Anders als bei `requestStorageAccess()` prüft Chrome bei einem Aufruf von `requestStorageAccessFor()` nicht, ob innerhalb der letzten 30 Tage eine Interaktion in einem Top-Level-Dokument stattgefunden hat, da der Benutzer bereits auf der Seite ist. Weitere Details zu diesem Verhalten finden Sie unter [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome).

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanfragen, die im Namen eines anderen Ursprungs gestellt werden, ist der Berechtigungsname anders als beim Rest der Storage Access API: `"top-level-storage-access"` anstelle von `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um festzustellen, ob dem Ursprung bereits zuvor eine Berechtigung erteilt wurde oder ob der Cookie-Zugriff noch angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir mit der Verwendung von Cookies beginnen; `requestStorageAccessFor()` wurde bereits aufgerufen, sodass es nicht erneut aufgerufen werden muss.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion aufrufen, wie etwa einem Button-Klick.

Nachdem die Berechtigung `"top-level-storage-access"` erteilt wurde, werden Cross-Site-Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) einschließen, sodass Websites möglicherweise abwarten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
