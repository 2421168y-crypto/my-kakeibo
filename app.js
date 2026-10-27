
/**
 * YUI家計簿
 * 共通プログラム・接続テスト
 * Version 0.1.0
 */

const YUI_VERSION = "0.1.0";

document.addEventListener("DOMContentLoaded", function() {

  const app = document.getElementById("app");

  if (!app) {
    console.error("app要素が見つかりません");
    return;
  }

  app.innerHTML = `
    <div class="max-w-md mx-auto mt-12 p-6">
      <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-emerald-100">

        <div class="text-5xl mb-4">🌷</div>

        <h1 class="text-2xl font-bold text-emerald-700">
          YUI家計簿
        </h1>

        <p class="text-gray-500 mt-4">
          GitHubから共通プログラムを読み込めました！
        </p>

        <p class="text-xs text-gray-400 mt-4">
          Version ${YUI_VERSION}
        </p>

      </div>
    </div>
  `;

});
